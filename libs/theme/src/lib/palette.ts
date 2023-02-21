import { PaletteMode, Palette, createTheme } from '@mui/material';

const muiThemePalette = createTheme().palette;
export const getDesignTokens = (mode: PaletteMode): Palette => ({
  ...muiThemePalette,
  mode,
  ...(mode === 'light'
    ? {
        //BCBEC2
        // palette values for light modp
        primary: {
          light: '#B5B6B6',
          main: '#50545D',
          dark: '#393A3D',
          contrastText: '#24262E',
        },
        background: {
          default: 'linear-gradient(180deg, #FDFDFD 0%, #B4C1CD 100%)',
          paper: '#f2f3fc',
        },
        secondary: {
          light: '#1892A2',
          main: '#386AC0',
          dark: '',
          contrastText: '',
        },
      }
    : {
        primary: {
          light: '#BABABB',
          main: '#B8C5D2',
          dark: '#667F95',
          contrastText: '#DDE4EF',
        },
        background: {
          default: 'linear-gradient(180deg, #FDFDFD 0%, #B4C1CD 100%)',
          paper: '#ECEEEE',
        },
        text: {
          primary: '#50545D',
          secondary: '#393A3D',
          disabled: '#4D5561',
        },
        // palette values for dark mode
        // primary: '#161718',
        // divider: '#161718',
        // bodyBG: 'linear-gradient(180deg, #FDFDFD 0%, #BCBEC2 100%)',
        // default: '#50545F',
        // paper: '#161718',
        // text_dark: '#24262E',
        // text_medium: '#393A3D',
        // text_light: '#50545D',
      }),
});

// const lightColorPalette : Record<string,string> = {
//   linearBG
// }
