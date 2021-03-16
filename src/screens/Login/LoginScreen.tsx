import React from 'react';

// @Components
import { ContainerComponent, Header } from '../../components/';

// @Containers
import { LoginContainer } from '../../containers/';
// @Constants
import { LOGIN_ROUTE } from '../../constants/';

const LoginScreen = () => {
  return (
    <ContainerComponent>
      <>
        <Header title={LOGIN_ROUTE} />
        <LoginContainer />
      </>
    </ContainerComponent>
  );
};

export default LoginScreen;
