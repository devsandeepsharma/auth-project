import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import LoginContextProvider from '../../store/LoginContextProvider';

const Layout = (props) => {
  return (
    <LoginContextProvider>
      <MainNavigation />
      <main>{props.children}</main>
    </LoginContextProvider>
  );
};

export default Layout;
