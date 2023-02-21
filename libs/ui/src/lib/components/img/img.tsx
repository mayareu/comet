import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export const Img = styled('img')<{ props?: CSSProperties }>(
  ({ props = {} }) => ({
    display: 'block',
    margin: 10,
    ...props,
  })
);

export default Img;
