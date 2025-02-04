'use client';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: '#ef4137',
    },
    secondary: {
      main: '#f7931e',
    },
  },
});

theme = createTheme(theme, {
  cssVariables: true,
  palette: {
    alcohol: theme.palette.augmentColor({
      color: {
        main: '#95A5A6',
      },
    }),
    crafting: theme.palette.augmentColor({
      color: {
        main: '#9C27B0',
      },
    }),
    fire_art: theme.palette.augmentColor({
      color: {
        main: '#FF5722',
      },
    }),
    food: theme.palette.augmentColor({
      color: {
        main: '#03A9F4',
      },
    }),
    red_light: theme.palette.augmentColor({
      color: {
        main: '#F10000',
      },
    }),
    sober: theme.palette.augmentColor({
      color: {
        main: '#8BC34A',
      },
    }),
    spectacle: theme.palette.augmentColor({
      color: {
        main: '#F1C40F',
      },
    }),
  },
});

export default theme;
