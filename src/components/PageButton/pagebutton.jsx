import React from "react";
import {useStepper} from "contexts/StepperContext";
import {Button, Stack} from "@mui/material";

const PageButton = ({steps, ...otherProps}) => {
    const {activeStep, handleBack} = useStepper();
    return (
        <Stack
            direction="row"
            justifyContent={activeStep === 0 ? "flex-end" : "space-between"}
            alignItems="flex-end"
            {...otherProps}>
            {activeStep > 0 && (
                <Button onClick={handleBack} size="large">
                    Go back
                </Button>
            )}
            {activeStep < steps.length && (
                <Button variant="contained" size="large" type="submit">
                    {activeStep === steps.length - 1 ? "Confirm" : "Next Step"}
                </Button>
            )}
        </Stack>
    );
};

export default PageButton;
