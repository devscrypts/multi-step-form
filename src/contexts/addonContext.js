import React, {createContext, useContext, useState} from "react";

const AddOnContext = createContext([]);

export const AddonProvider = ({children}) => {
    const [selectedAddons, setSelectedAddons] = useState([]);
    return (
        <AddOnContext.Provider value={{selectedAddons, setSelectedAddons}}>
            {children}
        </AddOnContext.Provider>
    );
};

export const useAddon = () => useContext(AddOnContext);
