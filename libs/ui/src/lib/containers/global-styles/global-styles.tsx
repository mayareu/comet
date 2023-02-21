import { css, Global } from '@emotion/react';
import { FC } from 'react';

export const GlobalStyles: FC = () => {
  return (
    <Global
      styles={css`
        body {
          width: 100%;
          height: 100%;
          position: relative;
          display: block;
          margin: 0;
          overflow: hidden;
        }
        html,
        #root {
          width: 100%;
          height: 100%;
          position: relative;
        }
      `}
    />
  );
};

export default GlobalStyles;
