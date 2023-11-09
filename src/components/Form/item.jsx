import React, {
    cloneElement,
    isValidElement,
    memo,
    useContext,
    useMemo
} from "react";
// eslint-disable-next-line no-restricted-imports
import {Field} from "rc-field-form";
import {isArray, isFunction, isObject} from "lodash";
import FormContext from "./contexts/FormContext";
import {
    getFieldId,
    hasValidName,
    supportRef,
    toArray,
    warning
} from "./helpers";
import {FormItemProvider} from "./contexts/FormItemContext";
import useItemRef from "./hooks/useItemRef";
import {FormStatusProvider} from "./contexts/FormStatusContext";

const Item = function (props) {
    const {
        name,
        dependencies,
        shouldUpdate,
        rules,
        children,
        label,
        messageVariables,
        hidden,
        help,
        trigger = "onChange",
        validateTrigger
    } = props;

    const getItemRef = useItemRef();
    const formContext = useContext(FormContext);
    const parsedChildren = parseChildren(children);
    const hasName = hasValidName(name);

    const variables = useMemo(() => {
        let variables = {};

        if (typeof label === "string") {
            variables.label = label;
        }

        if (messageVariables) {
            variables = {...variables, ...messageVariables};
        }

        return variables;
    }, [messageVariables, label]);

    function renderItem(content, context) {
        let node;

        if (context) {
            node = (
                <FormItemProvider {...context} help={help} label={label}>
                    {content}
                </FormItemProvider>
            );
        } else {
            node = <FormStatusProvider>{content}</FormStatusProvider>;
        }

        if (hidden) {
            return <div hidden>{node}</div>;
        }

        return node;
    }

    if (!hasName && !isFunction(parsedChildren) && !dependencies) {
        return renderItem(parsedChildren);
    }

    return (
        <Field
            {...props}
            messageVariables={variables}
            trigger={trigger}
            validateTrigger={validateTrigger}>
            {(control, meta, context) => {
                const fieldName = toArray(name).length ? meta.name : [];
                const id = getFieldId(fieldName, formContext.name);

                const isRequired = toArray(rules).some((rule) => {
                    let ruleObject;

                    if (isFunction(rule)) {
                        ruleObject = rule(context);
                    } else {
                        ruleObject = rule;
                    }

                    if (isObject(ruleObject)) {
                        return ruleObject.required && !ruleObject.warningOnly;
                    }

                    return false;
                });

                let childNode = null;

                warning(
                    !(shouldUpdate && dependencies),
                    "`shouldUpdate` and `dependencies` shouldn't be used together.",
                    "Form.Item"
                );

                if (isFunction(parsedChildren)) {
                    const canUpdate = Boolean(shouldUpdate || dependencies);

                    warning(
                        canUpdate,
                        "a render function must have either `shouldUpdate` or `dependencies`.",
                        "Form.Item"
                    );

                    warning(
                        !hasName,
                        "a render function cannot be a field, and cannot have a `name` prop.",
                        "Form.Item"
                    );

                    if (canUpdate && !hasName) {
                        childNode = parsedChildren(context);
                    }
                } else if (dependencies && !hasName) {
                    warning(
                        false,
                        "Must set `name` or use a render function when `dependencies` is set.",
                        "Form.Item"
                    );
                } else if (isValidElement(parsedChildren)) {
                    const child = parsedChildren;

                    const childProps = {...child.props, ...control};

                    if (!childProps.id) {
                        childProps.id = id;
                    }

                    if (meta.errors.length > 0) {
                        childProps["aria-invalid"] = "true";
                    }

                    if (isRequired) {
                        childProps["aria-required"] = "true";
                    }

                    if (supportRef < React.ReactElement > child) {
                        if (child.ref) {
                            childProps.ref = getItemRef(fieldName, child.ref);
                        } else {
                            childProps.ref = getItemRef(fieldName);
                        }
                    }

                    const triggers = new Set([
                        ...toArray(trigger),
                        ...toArray(validateTrigger)
                    ]);

                    triggers.forEach((eventName) => {
                        childProps[eventName] = (...args) => {
                            control[eventName]?.(...args);
                            return child.props[eventName]?.(...args);
                        };
                    });

                    const memoized = Object.keys(control)
                        .filter((key) => !triggers.has(key))
                        .map((key) => control[key]);

                    childNode = (
                        <MemoInput
                            child={child}
                            memoized={[
                                ...memoized,
                                childProps["aria-required"],
                                childProps["aria-describedby"],
                                childProps["aria-invalid"]
                            ]}>
                            {cloneElement(child, childProps)}
                        </MemoInput>
                    );
                } else {
                    const isRenderableArray =
                        isArray(parsedChildren) && hasName;

                    warning(
                        !isRenderableArray,
                        "Item with a `name` prop must have a single child element.",
                        "Form.Item"
                    );

                    warning(
                        isRenderableArray || !fieldName.length,
                        "Item with a `name` prop is only for a valid React element.",
                        "Form.Item"
                    );

                    childNode = parsedChildren;
                }

                return renderItem(childNode, {meta, isRequired, id});
            }}
        </Field>
    );
};

const MemoInput = memo(
    function MemoizedInput(props) {
        return props.children;
    },
    (prev, next) =>
        prev.child === next.child &&
        prev.memoized.every((value, index) => value === next.memoized[index]) &&
        prev.memoized.length === next.memoized.length
);

export function parseChildren(children) {
    if (typeof children === "function") return children;

    const contents = toArray(children);

    return contents.length <= 1 ? contents[0] : contents;
}

export default Item;
