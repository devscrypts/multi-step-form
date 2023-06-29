export default function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderRadius: Number(theme.shape.borderRadius) * 2
                },
                text: {
                    color: theme.palette.grey[0],
                    "&:hover": {
                        color: theme.palette.primary.dark,
                        background: "transparent"
                    }
                },
                contained: {
                    boxShadow: "none",
                    background: theme.palette.primary.dark,
                    "&:hover": {
                        background: theme.palette.primary.light,
                        boxShadow: "none"
                    }
                }
            }
        }
    };
}
