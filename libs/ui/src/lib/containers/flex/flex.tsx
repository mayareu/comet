import styled from '@emotion/styled';
import { CSSProperties } from '@mui/styled-engine';

export const BasicFlexContainer = styled('div')<{ props?: CSSProperties }>(
  ({ props = {} }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
    ...props,
  })
);
export const PageLayout = styled('div')({
  rowGap: 32,
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 48px)',
  height: 'calc(100% - 88px)',
  position: 'relative',
  margin: 'auto',
  padding: 32,
});
