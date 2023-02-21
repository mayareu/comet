import { Theme } from '@comet/types';
import { useTheme } from '@emotion/react';

export const useCustomTheme = (): Theme => {
  const theme = useTheme() as Theme;
  return theme;
};
