import React, {createContext, useState, useMemo, useCallback} from "react";

const FormStatusContext = createContext({
    errors: [],
    warnings: []
});

const FormStatusProvider = function ({children}) {
    const [statuses, setStatuses] = useState({});

    const {errors, warnings} = useMemo(() => {
        const values = Object.values(statuses);

        return values.reduce(
            (result, value) => {
                result.errors.push(...value.errors);
                result.warnings.push(...value.warnings);
                return result;
            },
            {errors: [], warnings: []}
        );
    }, [statuses]);

    const onStatusChange = useCallback((name, status) => {
        setStatuses((statuses) => ({...statuses, [name]: status}));
    }, []);

    const context = useMemo(
        () => ({onStatusChange, errors, warnings}),
        [onStatusChange, errors, warnings]
    );

    return (
        <FormStatusContext.Provider value={context}>
            {children}
        </FormStatusContext.Provider>
    );
};

export {FormStatusProvider};
export default FormStatusContext;
