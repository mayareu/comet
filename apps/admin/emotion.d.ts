import { CreateStyledComponent } from '@emotion/styled';
import { PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-explicit-any
  export type StyledTags = {
    [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
      {
        theme?: Theme;
        as?: React.ElementType;
      },
      JSX.IntrinsicElements[Tag]
    >;
  };
}

interface Theme {
  typography: TypographyOptions;
  zIndex: Record<string, number>;
  shadows: Record<string, string>;
  palette: Palette;
}
type Palette = { mode: PaletteMode } & Record<string, string>;
