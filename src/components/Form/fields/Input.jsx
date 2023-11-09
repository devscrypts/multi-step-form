import React, {useContext} from "react";
import {StyledInput} from "../../styled";
import FormItemContext from "../contexts/FormItemContext";
import useStatusColor from "../hooks/useStatusColor";
import useHelperText from "../hooks/useHelperText";
import {Box, Typography} from "@mui/material";

const Input = ({value, ...otherProps}) => {
    const {isRequired, label} = useContext(FormItemContext);

    const color = useStatusColor();
    const helper = useHelperText();

    return (
        <Box>
            <Typography color="primary.dark">{label}</Typography>
            <StyledInput {...otherProps} color={color} required={isRequired} />
            {helper && (
                <Typography color={color} variant="body2">
                    {helper}
                </Typography>
            )}
        </Box>
    );
};

export default Input;
