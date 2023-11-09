import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";

const ToggleContext = createContext({
    toggle: false,
    onToggle: () => {}
});

const useToggle = () => useContext(ToggleContext);

const ToggleProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = useCallback(
        () => setToggle((prev) => !prev),
        [setToggle]
    );

    const value = useMemo(
        () => ({toggle, onToggle: handleToggle}),
        [toggle, handleToggle]
    );
    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    );
};
export {ToggleProvider, useToggle};
export default ToggleContext;
