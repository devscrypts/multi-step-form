import React from "react";
import {useStepper} from "contexts/StepperContext";
import {Box, Stack, styled} from "@mui/material";
import PageButton from "../PageButton";

const PageContent = ({steps}) => {
    const {activeStep} = useStepper();
    return (
        <ContentStyle>
            {steps.map((o, index) => (
                <Box
                    sx={{
                        display: activeStep === index ? "block" : "none",
                        flexGrow: 1,
                        position: "relative"
                    }}
                    key={o.id}>
                    {o.step}
                </Box>
            ))}
            {activeStep < steps.length - 1 && (
                <PageButton
                    steps={steps}
                    sx={{display: {xs: "none", md: "flex"}}}
                />
            )}
        </ContentStyle>
    );
};

const ContentStyle = styled(Stack)(({theme}) => ({
    padding: theme.spacing(5, 0, 1),
    width: "90%",
    minHeight: 561,
    height: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
        minHeight: 593,
        paddingBottom: theme.spacing(5)
    }
}));

export default PageContent;
