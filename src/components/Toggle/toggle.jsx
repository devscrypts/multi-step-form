import React from "react";
import {Stack, styled, Switch, Typography} from "@mui/material";
import {useToggle} from "contexts/ToggleContext";

const Toggle = () => {
    const {toggle, onToggle: handleToggle} = useToggle();

    return (
        <Container direction="row" justifyContent="center" alignItems="center">
            <StyledTypography selected={!toggle}>Monthly</StyledTypography>
            <StyledSwitch
                checked={toggle}
                onChange={handleToggle}
                inputProps={{"aria-label": "controlled"}}
            />
            <StyledTypography selected={toggle}>Yearly</StyledTypography>
        </Container>
    );
};

export default Toggle;

const Container = styled(Stack)(({theme}) => ({
    backgroundColor: theme.palette.neutral.magnolia,
    padding: theme.spacing(2, 0),
    borderRadius: theme.shape.borderRadius * 2,
    margin: theme.spacing(4, 0)
}));

const StyledTypography = styled(Typography, {
    shouldForwardProp: (props) => props !== "selected"
})(({theme, selected}) => ({
    color: theme.palette.grey[0],
    fontWeight: 500,
    fontSize: 14,
    ...(selected && {color: theme.palette.primary.dark})
}));

const StyledSwitch = styled(Switch)(({theme}) => ({
    margin: theme.spacing(0, 2),
    width: 35,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(9px)"
        }
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(18px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.primary.dark
            }
        }
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(["width"], {
            duration: 200
        })
    },
    "& .MuiSwitch-track": {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.primary.dark,
        boxSizing: "border-box"
    }
}));
