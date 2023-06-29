import React from "react";
import {Button} from "@mui/material";
import {ButtonContainer} from "../styles";
import {useStepper} from "contexts/stepperContext";

const Summary = () => {
    const {handleNext, handleBack} = useStepper();
    return (
        <div>
            summary
            <ButtonContainer justifyContent="space-between">
                <Button onClick={handleBack} size="large">
                    Go back
                </Button>
                <Button variant="contained" size="large" onClick={handleNext}>
                    Confirm
                </Button>
            </ButtonContainer>
        </div>
    );
};

export default Summary;
