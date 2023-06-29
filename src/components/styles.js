import {Box, Stack, styled} from "@mui/material";

export const RootStyle = styled(Box)(({theme}) => ({
    padding: theme.spacing(5, 0, 1),
    width: "80%",
    margin: "0 auto"
}));

export const ButtonContainer = styled(Box)(({theme, justifyContent}) => ({
    marginTop: theme.spacing(10),
    display: "flex",
    justifyContent
}));

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
    })
}));
