import React, {createContext, useContext, useEffect, useMemo} from "react";
import {emptyMeta, getFieldId} from "../helpers";
import FormStatusContext from "./FormStatusContext";

const FormItemContext = createContext({
    touched: false,
    validating: false,
    validated: false,
    isRequired: false,
    errors: [],
    warnings: []
});

const FormItemProvider = function ({
    meta = emptyMeta(),
    isRequired = false,
    id,
    label,
    help,
    children
}) {
    const {onStatusChange} = useContext(FormStatusContext);
    const {name, errors, warnings, touched, validating, validated} = meta;

    const formItemContext = useMemo(
        () => ({
            touched,
            validating,
            validated,
            isRequired,
            errors: onStatusChange ? [] : errors,
            warnings: onStatusChange ? [] : warnings,
            id,
            label,
            help
        }),
        [
            touched,
            validating,
            validated,
            isRequired,
            onStatusChange,
            errors,
            warnings,
            id,
            label,
            help
        ]
    );

    const itemName = getFieldId(name) ?? "__";

    useEffect(() => {
        if (onStatusChange) onStatusChange(itemName, {errors, warnings});
    }, [itemName, onStatusChange, errors, warnings]);

    return (
        <FormItemContext.Provider value={formItemContext}>
            {children}
        </FormItemContext.Provider>
    );
};

export {FormItemProvider};
export default FormItemContext;
