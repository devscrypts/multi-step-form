import React, {createContext, useContext} from "react";

const StepperContext = createContext({})

export const StepperProvider = ({children}) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep === 0 ? 0 : prevActiveStep - 1);
    };
    return (
        <StepperContext.Provider value={{activeStep, handleNext, handleBack}}>
            {children}
        </StepperContext.Provider>
    )
}

export const useStepper = () => useContext(StepperContext);