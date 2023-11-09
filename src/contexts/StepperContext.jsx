import React, {createContext, useCallback, useContext, useMemo} from "react";

const StepperContext = createContext({});

const useStepper = () => useContext(StepperContext);

const StepperProvider = ({children}) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, [setActiveStep]);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep === 0 ? 0 : prevActiveStep - 1
        );
    }, [setActiveStep]);

    const handleStep = useCallback(
        (step) => {
            setActiveStep(step);
        },
        [setActiveStep]
    );

    const value = useMemo(
        () => ({
            activeStep,
            handleNext,
            handleBack,
            handleStep
        }),
        [activeStep, handleNext, handleBack, handleStep]
    );
    return (
        <StepperContext.Provider value={value}>
            {children}
        </StepperContext.Provider>
    );
};

export {StepperProvider, useStepper};
export default StepperContext;
