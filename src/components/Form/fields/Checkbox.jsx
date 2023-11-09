import React, {useContext} from "react";
import {Checkbox as BaseCheckbox, FormControlLabel} from "@mui/material";
import useStatusColor from "../hooks/useStatusColor";
import FormItemContext from "../contexts/FormItemContext";

const Checkbox = function ({
    checked,
    disabled = false,
    labelPlacement,
    ...otherProps
}) {
    const color = useStatusColor();
    const {isRequired, label} = useContext(FormItemContext);

    const control = (
        <BaseCheckbox
            {...otherProps}
            checked={checked ?? false}
            color={color}
            disabled={disabled}
            sx={{...(color && {color: `${color}.main`}), ...otherProps.sx}}
        />
    );

    if (!label) return control;

    return (
        <FormControlLabel
            control={control}
            disabled={disabled}
            label={label}
            labelPlacement={labelPlacement}
            required={isRequired}
        />
    );
};

export default Checkbox;
