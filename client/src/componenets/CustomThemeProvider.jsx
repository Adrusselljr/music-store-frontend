import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";

const Purple = '#6750A4';
const Black = '#1C1B1F';

const Theme = createTheme({
    palette: {
        primary: {
        main: Purple,
        },
        secondary: {
        main: Black,
        },
    },

    components: {
        MuiButton: {
        styleOverrides: {
            root: {
            borderRadius: '25px',
            fontSize: '.75rem'
            }
        }
        }
    }
    })

    const CustomThemeProvider = props => {
    const { children } = props

    return (
    <ThemeProvider theme={ Theme }>
        { children }
    </ThemeProvider>
    )
}

export default CustomThemeProvider