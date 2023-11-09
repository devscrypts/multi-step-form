"use client";
import React, {createContext, useMemo} from "react";
// eslint-disable-next-line no-restricted-imports

const FormContext = createContext({
    itemRef: () => () => null
});

const FormProvider = function ({name, form, children}) {
    const formContext = useMemo(
        () => ({
            name,
            itemRef: form.__INTERNAL__.itemRef,
            form: form
        }),
        [name, form]
    );

    return (
        <FormContext.Provider value={formContext}>
            {children}
        </FormContext.Provider>
    );
};

export {FormProvider};
export default FormContext;
