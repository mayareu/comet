import { PaletteMode, Theme, createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { getDesignTokens } from './palette';

const muiTheme = createTheme();
export const createCustomTheme = (mode: PaletteMode): Theme =>
  createTheme({
    ...muiTheme,
    typography,
    palette: getDesignTokens(mode),
    zIndex: {
      appBar: 600,
      modal: 700,
      drawer: 800,
      snackbar: 900,
      tooltip: 1000,
    },
  });

const typography: TypographyOptions = {
  fontFamily: '"Montserrat", sans-serif',
  h1: {
    fontSize: 28,
    fontWeight: 500,
    lineHeight: '28px',
  },
  h2: {
    fontSize: 24,
    fontWeight: 300,
    lineHeight: '24px',
  },
  h3: { fontSize: 22, fontWeight: 200, lineHeight: '22px' },
  h4: { fontSize: 20, fontWeight: 200, lineHeight: '20px' },
  h5: { fontSize: 18, fontWeight: 200, lineHeight: '18px' },
  h6: { fontSize: 16, fontWeight: 200, lineHeight: '16px' },
  subtitle1: { fontSize: 18, fontWeight: 400, lineHeight: '18px' },
  subtitle2: { fontSize: 16, fontWeight: 400, lineHeight: '16px' },
  body1: { fontSize: 14, fontWeight: 300, lineHeight: '14px' },
  body2: { fontSize: 12, fontWeight: 300, lineHeight: '12px' },
};
