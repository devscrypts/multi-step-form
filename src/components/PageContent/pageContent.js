import React from "react";
import UserInfo from "../UserInfo";
import Plans from "../Plans";
import Addons from "../Addons";
import Summary from "../Summary";
import {useStepper} from "contexts/stepperContext";
import {Box, styled} from "@mui/material";

const steps = [
    {
        id: 1,
        step: <UserInfo />
    },
    {
        id: 2,
        step: <Plans />
    },
    {
        id: 3,
        step: <Addons />
    },
    {
        id: 4,
        step: <Summary />
    }
];

const PageContent = ({...props}) => {
    const {activeStep} = useStepper();
    return <RootStyle {...props}>{steps[activeStep]?.step}</RootStyle>;
};

const RootStyle = styled(Box)({
    width: "100%"
});

export default PageContent;
