import React, {useContext} from "react";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    Radio,
    RadioGroup as BaseRadioGroup,
    Stack,
    styled,
    Typography
} from "@mui/material";
import {defaultTo} from "lodash";
import FormItemContext from "../contexts/FormItemContext";
import useStatusColor from "../hooks/useStatusColor";
import useHelperText from "../hooks/useHelperText";
import {CustomCard} from "../../styled";

const RadioGroup = function ({
    options,
    value,
    subscription,
    toggle,
    ...baseProps
}) {
    const {isRequired} = useContext(FormItemContext);

    const color = useStatusColor();
    const helper = useHelperText();

    return (
        <FormControl
            color={color}
            error={color === "error"}
            required={isRequired}
            sx={{width: "100%"}}>
            <BaseRadioGroup row value={defaultTo(value, null)} {...baseProps}>
                <Grid container spacing={1.5}>
                    {options.map((option) => {
                        const isSelected =
                            value?.toString() === option.value.toString();
                        return (
                            <Grid item xs={12} md={4} key={option.name}>
                                <CustomCard selected={isSelected}>
                                    <Stack
                                        direction={{xs: "row", md: "column"}}
                                        spacing={2}>
                                        <Icon src={option.icon} />
                                        <Stack>
                                            <Typography
                                                color="primary.dark"
                                                sx={{fontWeight: 500}}>
                                                {option.name}
                                            </Typography>
                                            <Box>
                                                <Typography
                                                    color="grey.0"
                                                    variant="body2">
                                                    {"$" +
                                                        option.value +
                                                        subscription}
                                                </Typography>
                                                {toggle && (
                                                    <Typography
                                                        color="primary.dark"
                                                        variant="body2">
                                                        2 months free
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Stack>
                                    </Stack>

                                    <StyledFormControlLabel
                                        label=""
                                        value={option.value}
                                        control={
                                            <Radio sx={{display: "none"}} />
                                        }
                                    />
                                </CustomCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </BaseRadioGroup>

            {Boolean(helper) && <FormHelperText>{helper}</FormHelperText>}
        </FormControl>
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
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(0)
    }
}));

export default RadioGroup;
