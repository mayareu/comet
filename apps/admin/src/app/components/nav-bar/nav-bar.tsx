import { NavRoute } from '@comet/types';
import { Box, Tab, Tabs, styled, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface NavBarProps {
  routes: NavRoute[];
}

const StyledNavBar = styled(Box)(({ theme }) => ({
  height: 48,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: '2px -4px 16px 0px #00000042',
}));

const StyledTab = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: 18,
  fontWeight: 200,
  color: '#161718',
}));

export const NavBar: FC<NavBarProps> = ({ routes }) => {
  const { pathname } = useLocation();
  return (
    <StyledNavBar>
      <Tabs value={pathname}>
        {routes.map((route, index) => (
          <Tab
            label={route.label}
            value={route.href}
            to={route.href}
            component={StyledTab}
          />
        ))}
      </Tabs>
    </StyledNavBar>
  );
};

export default NavBar;
