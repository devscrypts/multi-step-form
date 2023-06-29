// Theme color config
import {common} from "@mui/material/colors";

const GREY = {
    0: "hsl(231, 11%, 63%)",
    100: "hsl(229, 24%, 87%)",
    200: "hsl(225,33.3%,95.3%)"
};

const NEUTRAL = {
    magnolia: "hsl(217, 100%, 97%)",
    alabaster: "hsl(231, 100%, 99%)"
};
const PRIMARY = {
    dark: "hsl(213, 96%, 18%)",
    main: "hsl(243, 100%, 62%)",
    light: "hsl(228, 100%, 84%)",
    lighter: "hsl(206, 94%, 87%)",
    contrastText: "#fff"
};

const SECONDARY = {
    main: "hsl(354, 84%, 57%)",
    contrastText: "#fff"
};
const ERROR = {
    main: "hsl(0, 87%, 67%)",
    contrastText: "#fff"
};

const COMMON = {
    common: {black: "#000", white: "#fff"},
    primary: {...PRIMARY},
    secondary: {...SECONDARY},
    error: {...ERROR},
    grey: GREY,
    neutral: {...NEUTRAL}
};

const palette = {
    ...COMMON,
    text: {primary: common.black, secondary: GREY[100], default: common.black},
    background: {paper: "#fff", default: "#fff", neutral: GREY[0]}
};

export default palette;
