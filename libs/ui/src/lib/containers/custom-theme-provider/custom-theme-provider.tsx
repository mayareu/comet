import { createCustomTheme } from '@comet/theme';
import { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

export interface CustomThemeProviderProps {
  children: ReactNode;
  mode: PaletteMode;
}

export const CustomThemeProvider: FC<CustomThemeProviderProps> = ({
  children,
  mode,
}) => {
  const customTheme = createCustomTheme(mode);
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
