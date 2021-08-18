import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(0,210,255)",
        },
        secondary: {
            main: "rgb(19,142,162)",
        },
        info: {
            main: "rgb(165,229,255)",
        },
        success: {
            main: "#4caf4f",
        },
        warning: {
            main: "#ff9800",
        },
        error: {
            main: "#f44336",
        },
    },
});

// light: "rgb(165,229,255)",
// light: "rgb(165,229,255)",
// light: "rgb(165,229,255)",

export const darkTheme = createMuiTheme({
    palette: {
        text: {
            primary: "rgb(0,255,255)",
        },
        divider: "rgb(0,255,255)",
        background: {
            paper: "rgba(35,46,66)",
            default: "rgb(31,77,85)",
        },
        primary: {
            main: "rgb(0,255,255)",
        },
        secondary: {
            main: "rgb(31,77,85)",
        },
        info: {
            main: "rgb(19,142,162)",
        },
        success: {
            main: "#4caf50",
        },
        warning: {
            main: "#ff9800",
        },
        error: {
            main: "#f44336",
        },
    },
});

// dark: "rgb(19,142,162)",
// dark: "rgb(19,142,162)",
// dark: "rgb(19,142,162)",