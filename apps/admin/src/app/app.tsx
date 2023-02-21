import { styled } from '@mui/material/styles';

import { Route, Routes } from 'react-router-dom';
import { CustomThemeProvider, GlobalStyles } from '@comet/ui';
import { FC, useEffect } from 'react';
import Home from './pages/home/home';
import Locations from './pages/locations/locations';
import { NavRoute } from '@comet/types';
import NavBar from './components/nav-bar/nav-bar';
import { getCitiesList } from './api/api';
import ContextProvider from './context-provider/context-provider';
const StyledApp = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.primary.dark,
  // background: theme.palette.background.default,
}));

export const App: FC = () => {
  useEffect(() => {
    getCitiesList().then();
  }, []);
  return (
    <StyledApp>
      <NavBar routes={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Locations />} />
      </Routes>
    </StyledApp>
  );
};

export const AppWithStyles: FC = () => {
  return (
    <ContextProvider>
      <CustomThemeProvider mode={'light'}>
        <GlobalStyles />
        <App />
      </CustomThemeProvider>
    </ContextProvider>
  );
};
export default AppWithStyles;

const pages: NavRoute[] = [
  { label: 'Home', href: '/' },
  { label: 'Favorites', href: '/favorites' },
];
