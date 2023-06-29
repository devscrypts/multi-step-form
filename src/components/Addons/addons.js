import React, {useState} from "react";
import {Box, Button, Checkbox, Stack, Typography} from "@mui/material";
import {ButtonContainer, CustomCard, RootStyle} from "../styles";
import PageHeader from "../PageHeader";
import {useToggle} from "contexts/toggleContext";
import {useStepper} from "contexts/stepperContext";
import {useAddon} from "contexts/addonContext";

const Addons = () => {
    const {toggle} = useToggle();
    const {handleNext, handleBack} = useStepper();
    const {setSelectedAddons} = useAddon();

    const [addOns, setAddons] = useState([
        {
            id: 1,
            name: "Online Service",
            description: "Access to multiplayer games",
            value: toggle ? 10 : 1,
            checked: false
        },
        {
            id: 2,
            name: "Larger Storage",
            description: "Extra 1TB of cloud save",
            value: toggle ? 20 : 2,
            checked: false
        },
        {
            id: 3,
            name: "Customizable Profile",
            description: "Custom theme on your profile.",
            value: toggle ? 20 : 2,
            checked: false
        }
    ]);

    const subscription = toggle ? "/yr" : "/mo";

    const handleChange = (e) => {
        const updatedAddons = addOns.map((addon) => ({
            ...addon,
            checked:
                addon.name === e.target.name ? e.target.checked : addon.checked
        }));
        setAddons(updatedAddons);
    };

    const handleClick = () => {
        const selectedAddons = addOns.filter((addon) => addon.checked === true);
        setSelectedAddons(selectedAddons);
        handleNext();
    };

    return (
        <RootStyle>
            <PageHeader
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <Stack spacing={2}>
                {addOns.map((addon) => (
                    <CustomCard
                        key={addon.id}
                        direction="row"
                        selected={addon.checked === true}
                        alignItems="center">
                        <Checkbox
                            value={addon.checked}
                            onChange={handleChange}
                            name={addon.name}
                        />
                        <Stack sx={{ml: 2}}>
                            <Typography
                                color="primary.dark"
                                sx={{fontWeight: 500}}>
                                {addon.name}
                            </Typography>
                            <Typography color="grey.0" sx={{fontSize: 14}}>
                                {addon.description}
                            </Typography>
                        </Stack>
                        <Box sx={{flex: 1}} />
                        <Typography color="primary.main" sx={{fontSize: 14}}>
                            {"$" + addon.value + subscription}
                        </Typography>
                    </CustomCard>
                ))}
            </Stack>
            <ButtonContainer justifyContent="space-between">
                <Button onClick={handleBack} size="large">
                    Go back
                </Button>
                <Button variant="contained" size="large" onClick={handleClick}>
                    Next Step
                </Button>
            </ButtonContainer>
        </RootStyle>
    );
};

export default Addons;
