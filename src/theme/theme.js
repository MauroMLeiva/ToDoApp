import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            columns: 800,
            md: 900,
            columns3: 1050,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#e65100',
        },
        secondary: {
            main: '#b71c1c',
        },
        error: {
            main: '#ff6f00',
        },
        warning: {
            main: '#fdd835',
        },
        background: {
            default: '#191919',
            paper: '#e2e2e2',
        },
        labels: {
            teal: '#638889',
            brown: '#9B4444',
            yellow: '#FFB534',
            grey: '#A9A9A9',
            green: '#CDC733',
            pink: '#FFC6AC',
        },
    },
});
