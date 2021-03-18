import React from 'react';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header } from '../../components/';

// @Containers
import { LoginContainer } from '../../containers/';

// @constants
import { tKeys } from '../../constants/';

const LoginScreen = () => {
  const { t } = useTranslation();

  return (
    <ContainerComponent>
      <>
        <Header title={t(tKeys.loginLabel)} />
        <LoginContainer />
      </>
    </ContainerComponent>
  );
};

export default LoginScreen;
