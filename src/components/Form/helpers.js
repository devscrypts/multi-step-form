import {isMemo} from "react-is";
import {isFunction, isObject} from "lodash";

export function toNamePathStr(name) {
    const namePath = toArray(name);
    return namePath.join("_");
}

export function emptyMeta() {
    return {
        errors: [],
        warnings: [],
        touched: false,
        validating: false,
        name: [],
        validated: false
    };
}

export function toArray(candidate) {
    if (candidate === undefined || candidate === false) return [];
    return Array.isArray(candidate) ? candidate : [candidate];
}

export function getFieldId(namePath, formName) {
    if (!namePath.length) return;

    const mergedId = namePath.join("_");

    if (!formName) return mergedId;

    return `${formName}_${mergedId}`;
}

export function hasValidName(name) {
    return !(name === undefined || name === null);
}

export function supportRef(element) {
    const type = isMemo(element) ? element.type.type : element.type;

    return !(typeof type === "function" && !type.prototype?.render);
}

export function warning(valid, message, context) {
    if (process.env.NODE_ENV !== "production" && !valid) {
        console.warn(`Warning: ${context && `[${context}]`} ${message}`);
    }
}

export function composeRef(...refs) {
    const refList = refs.filter((ref) => ref);

    if (refList.length <= 1) return refList[0];

    return (node) => {
        refList.forEach((ref) => {
            if (isFunction(ref)) {
                ref(node);
            } else if (isObject(ref) && "current" in ref) {
                ref.current = node;
            }
        });
    };
}
