import React, {useMemo} from "react";
import {CssBaseline} from "@mui/material";
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider
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
