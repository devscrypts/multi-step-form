import React, {Fragment, useContext} from "react";
import {Box, Divider, Stack, styled, Typography} from "@mui/material";
import {useStepper} from "contexts/StepperContext";
import PageHeader from "../PageHeader";
import FormContext from "../Form/contexts/FormContext";
import {useSubscription} from "contexts/SubscriptionContext";
import {useToggle} from "contexts/ToggleContext";
import {isEmpty} from "lodash";

const Summary = () => {
    const {form} = useContext(FormContext);
    const {toggle} = useToggle();
    const {plans, addOns, subscription} = useSubscription();
    const {handleStep} = useStepper();

    const selectedPlan = plans.find(
        (plan) =>
            plan.value.toString() === form.getFieldValue("plans").toString()
    );

    const selectedAddons = addOns.filter(
        (addOn) =>
            form.getFieldsValue([
                "Online Service",
                "Larger Storage",
                "Customizable Profile"
            ])[addOn.name]
    );

    const total = !isEmpty(selectedAddons)
        ? selectedAddons.reduce(
              (acc, current) => acc + current.value,
              selectedPlan?.value
          )
        : selectedPlan?.value;

    return (
        <Fragment>
            <PageHeader
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />

            <StyledBox divider={<Divider sx={{my: 2}} />}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Box>
                        <Typography color="primary.dark" sx={{fontWeight: 500}}>
                            {`${selectedPlan?.name} (${
                                toggle ? "Yearly" : "Monthly"
                            })`}
                        </Typography>
                        <Typography
                            color="grey.0"
                            variant="body2"
                            onClick={() => handleStep(1)}
                            sx={{
                                textDecoration: "underline",
                                "&:hover": {
                                    color: "primary.main",
                                    cursor: "pointer"
                                }
                            }}>
                            Change
                        </Typography>
                    </Box>
                    <Typography sx={{fontWeight: 500}}>
                        {"$" + selectedPlan?.value + subscription}
                    </Typography>
                </Stack>

                {selectedAddons.length !== 0 && (
                    <Stack spacing={1}>
                        {selectedAddons.map((addon) => (
                            <Stack
                                direction="row"
                                key={addon?.id}
                                justifyContent="space-between">
                                <Typography color="grey.0" variant="body2">
                                    {addon?.name}
                                </Typography>
                                <Typography
                                    color="primary.dark"
                                    variant="body2">
                                    {"$" + addon?.value + subscription}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                )}
            </StyledBox>
            <Stack direction="row" justifyContent="space-between" sx={{p: 3}}>
                <Typography color="grey.0" variant="body2">
                    {`Total (per ${toggle ? "year" : "month"})`}
                </Typography>
                <Typography
                    color="primary.main"
                    variant="subtitle1"
                    sx={{fontWeight: 600}}>
                    {"$" + total + subscription}
                </Typography>
            </Stack>
        </Fragment>
    );
};

const StyledBox = styled(Stack)(({theme}) => ({
    background: theme.palette.neutral.alabaster,
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(3)
}));
export default Summary;
