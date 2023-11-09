import {Stack, styled} from "@mui/material";

export const CustomCard = styled(Stack, {
    shouldForwardProp: (props) => props !== "selected"
})(({theme, selected}) => ({
    position: "relative",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
    border: `1px solid ${theme.palette.grey[100]}`,
    "&:hover": {
        border: `1px solid ${theme.palette.primary.main}`
    },
    ...(selected && {
        backgroundColor: theme.palette.neutral.magnolia,
        border: `1px solid ${theme.palette.primary.main}`
    }),
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 1)
    }
}));

export const StyledInput = styled("input", {
    shouldForwardProp: (propName) => propName !== "color"
})(({theme, color}) => ({
    width: "100%",
    borderRadius: theme.shape.borderRadius * 2,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    color: theme.palette.primary.dark,
    fontSize: 16,
    padding: theme.spacing(2, 3),
    outline: "none",
    border: `1px solid ${theme.palette.grey[100]}`,
    "&::placeholder": {
        fontSize: 16,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 500,
        color: theme.palette.grey[0]
    },
    "&:focus": {
        border: `1px solid ${
            color === "error"
                ? theme.palette.error.main
                : theme.palette.primary.main
        }`
    }
}));
