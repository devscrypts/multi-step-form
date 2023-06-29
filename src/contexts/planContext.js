import React, {createContext, useContext, useState} from "react";

const PlanContext = createContext({});

export const PlanProvider = ({children}) => {
    const [selectedPlan, setSelectedPlan] = useState({});
    return (
        <PlanContext.Provider value={{selectedPlan, setSelectedPlan}}>
            {children}
        </PlanContext.Provider>
    );
};

export const usePlans = () => useContext(PlanContext);
