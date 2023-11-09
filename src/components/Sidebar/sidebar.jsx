import React from "react";
import {useStepper} from "contexts/StepperContext";
import {
    Box,
    Stack,
    Step,
    StepConnector,
    StepLabel,
    Stepper,
    styled,
    Typography,
    useMediaQuery
} from "@mui/material";
import sidebarBackground from "assets/images/bg-sidebar-desktop.svg";
import mobileSideBarBackground from "assets/images/bg-sidebar-mobile.svg";

const Sidebar = () => {
    const {activeStep} = useStepper();
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <RootStyle>
            <StyledStepper
                activeStep={activeStep >= sidebarItems.length ? 3 : activeStep}
                orientation={isMd ? "horizontal" : "vertical"}
                connector={<DisabledStepConnector />}>
                {sidebarItems.map((item, index) => (
                    <Step key={item.label}>
                        <StyledStepLabel
                            StepIconComponent={() => (
                                <Box sx={{display: "none"}} />
                            )}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <CircularWrapper>
                                    <Typography sx={{fontWeight: 500}}>
                                        {index + 1}
                                    </Typography>
                                </CircularWrapper>
                                <Stack sx={{display: isMd ? "none" : "flex"}}>
                                    <Label>{item.label}</Label>
                                    <Description>
                                        {item.description}
                                    </Description>
                                </Stack>
                            </Stack>
                        </StyledStepLabel>
                    </Step>
                ))}
            </StyledStepper>
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

const RootStyle = styled(Box)(({theme}) => ({
    backgroundImage: `url(${sidebarBackground})`,
    height: "100%",
    width: "100%",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${mobileSideBarBackground})`,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        zIndex: "1"
    }
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

const StyledStepper = styled(Stepper)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        width: "fit-content"
    }
}));
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
