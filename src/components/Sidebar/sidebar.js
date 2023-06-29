import React from "react";
import {useStepper} from "contexts/stepperContext";
import {
    Box,
    Stack,
    Step,
    StepConnector,
    StepLabel,
    Stepper,
    styled,
    Typography
} from "@mui/material";
import sidebarBackground from "assets/images/bg-sidebar-desktop.svg";

const Sidebar = () => {
    const {activeStep} = useStepper();

    return (
        <RootStyle>
            <Stepper
                activeStep={activeStep}
                orientation="vertical"
                connector={<DisabledStepConnector />}>
                {sidebarItems.map((item, index) => (
                    <Step key={item.label}>
                        <StyledStepLabel StepIconComponent={StepIcon}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <CircularWrapper>
                                    <Typography sx={{fontWeight: 500}}>
                                        {index + 1}
                                    </Typography>
                                </CircularWrapper>
                                <Stack>
                                    <Label>{item.label}</Label>
                                    <Description>
                                        {item.description}
                                    </Description>
                                </Stack>
                            </Stack>
                        </StyledStepLabel>
                    </Step>
                ))}
            </Stepper>
        </RootStyle>
    );
};

const sidebarItems = [
    {
        label: "Step 1",
        description: "Your info"
    },
    {
        label: "Step 2",
        description: "Select Plan"
    },
    {
        label: "Step 3",
        description: "Addons"
    },
    {
        label: "Step 4",
        description: "Summary"
    }
];

const StepIcon = () => <Box sx={{display: "none"}} />;

const RootStyle = styled(Box)(({theme}) => ({
    backgroundImage: `url(${sidebarBackground})`,
    height: "100%",
    width: "100%",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5)
}));

const DisabledStepConnector = styled(StepConnector)({
    "& .MuiStepConnector-line": {
        border: "none"
    },
    "&.Mui-active, &.Mui-completed": {
        "& .MuiStepConnector-line": {
            border: "none"
        }
    }
});

const StyledStepLabel = styled(StepLabel)(({theme}) => ({
    padding: 0,
    "& .MuiStepLabel-label": {
        color: "white",
        "&.Mui-active": {
            color: "white",
            "& > .MuiStack-root > .MuiBox-root": {
                background: theme.palette.primary.lighter,
                color: "black"
            }
        },
        "&.Mui-completed": {
            color: "white"
        }
    }
}));

const CircularWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    width: 30,
    height: 30,
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    border: `1px solid ${theme.palette.common.white}`
}));

const Label = styled(Typography)(({theme}) => ({
    fontSize: 12,
    textTransform: "uppercase",
    color: theme.palette.grey[100]
}));

const Description = styled(Typography)({
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: 500
});

export default Sidebar;
