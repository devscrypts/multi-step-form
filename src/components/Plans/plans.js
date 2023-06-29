import React, {useState} from "react";
import {
    Button,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    styled,
    Typography
} from "@mui/material";
import arcadeIcon from "assets/images/icon-arcade.svg";
import advancedIcon from "assets/images/icon-advanced.svg";
import proIcon from "assets/images/icon-pro.svg";
import {usePlans} from "contexts/planContext";
import {useStepper} from "contexts/stepperContext";
import {useToggle} from "contexts/toggleContext";
import Toggle from "../Toggle";
import PageHeader from "../PageHeader";
import {ButtonContainer, CustomCard, RootStyle} from "../styles";

const Plans = () => {
    const {toggle} = useToggle();
    const {handleNext, handleBack} = useStepper();
    const {setSelectedPlan} = usePlans();
    const [value, setValue] = useState(null);

    const plans = [
        {
            id: 1,
            name: "Arcade",
            icon: arcadeIcon,
            value: toggle ? 90 : 9
        },
        {
            id: 2,
            name: "Advanced",
            icon: advancedIcon,
            value: toggle ? 120 : 12
        },
        {
            id: 3,
            name: "Pro",
            icon: proIcon,
            value: toggle ? 150 : 15
        }
    ];

    const subscription = toggle ? "/yr" : "/mo";

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        const selectedPlan = plans.find(
            (plan) => value?.toString() === plan.value.toString()
        );
        setSelectedPlan(selectedPlan);
        handleNext();
    };

    return (
        <RootStyle>
            <PageHeader
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />

            <RadioGroup name="plans" value={value} onChange={handleChange}>
                <Grid container spacing={1.5}>
                    {plans.map((plan) => {
                        const isSelected =
                            value?.toString() === plan.value.toString();
                        return (
                            <Grid item xs={4} key={plan.name}>
                                <CustomCard selected={isSelected}>
                                    <Stack>
                                        <Icon src={plan.icon} />
                                        <Typography
                                            color="primary.dark"
                                            sx={{fontWeight: 500}}>
                                            {plan.name}
                                        </Typography>
                                        <Typography
                                            color="grey.0"
                                            sx={{fontSize: 14}}>
                                            {"$" + plan.value + subscription}
                                        </Typography>
                                        {toggle && (
                                            <Typography
                                                color="primary.dark"
                                                sx={{fontSize: 14}}>
                                                2 months free
                                            </Typography>
                                        )}
                                    </Stack>

                                    <StyledFormControlLabel
                                        label=""
                                        value={plan.value}
                                        control={
                                            <Radio sx={{display: "none"}} />
                                        }
                                    />
                                </CustomCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </RadioGroup>
            <Toggle />
            <ButtonContainer justifyContent="space-between">
                <Button onClick={handleBack} size="large">
                    Go back
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick}
                    disabled={value === null}>
                    Next Step
                </Button>
            </ButtonContainer>
        </RootStyle>
    );
};

const StyledFormControlLabel = styled(FormControlLabel)({
    top: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
});

const Icon = styled("img")(({theme}) => ({
    width: 40,
    marginBottom: theme.spacing(5)
}));

export default Plans;
