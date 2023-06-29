import React, {useMemo} from "react";
import {CssBaseline} from "@mui/material";
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
} from "@mui/material/styles";
import palette from "./palette";
import Button from "./overrides/button";

// ----------------------------------------------------------------------

export default function ThemeConfig({children}) {
    const themeOptions = useMemo(
        () => ({
            palette,
            typography: {
                fontFamily: "Ubuntu, sans-serif"
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 375,
                    md: 900,
                    lg: 1200,
                    xl: 1440
                }
            }
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = Button(theme);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
