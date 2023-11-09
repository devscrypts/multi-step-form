// eslint-disable-next-line no-restricted-imports
import {useForm as useBaseForm} from "rc-field-form";
import scrollIntoView from "scroll-into-view-if-needed";
import React from "react";
import {getFieldId, toArray, toNamePathStr} from "../helpers";

const useForm = (form) => {
    const [baseForm] = useBaseForm();
    const itemsRef = React.useRef(new Map());

    const wrapForm = React.useMemo(
        () =>
            form ?? {
                ...baseForm,
                __INTERNAL__: {
                    itemRef: (name) => (node) => {
                        const namePathStr = toNamePathStr(name);

                        if (node) {
                            itemsRef.current.set(namePathStr, node);
                        } else {
                            itemsRef.current.delete(namePathStr);
                        }
                    }
                },
                scrollToField: (name, options) => {
                    const namePath = toArray(name);
                    const fieldId = getFieldId(
                        namePath,
                        wrapForm.__INTERNAL__.name
                    );

                    const node = fieldId
                        ? document.getElementById(fieldId)
                        : null;

                    if (node) {
                        scrollIntoView(node, {
                            block: "nearest",
                            scrollMode: "if-needed",
                            behavior: "smooth",
                            ...options
                        });
                    }
                },
                getFieldInstance: (name) => {
                    const namePathStr = toNamePathStr(name);
                    return itemsRef.current.get(namePathStr);
                }
            },
        [form, baseForm]
    );

    return [wrapForm];
};

export default useForm;
