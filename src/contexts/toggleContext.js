import React, {createContext, useContext, useState} from "react";

const ToggleContext = createContext(false);

export const ToggleProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <ToggleContext.Provider value={{toggle, setToggle}}>
            {children}
        </ToggleContext.Provider>
    );
};

export const useToggle = () => useContext(ToggleContext);
