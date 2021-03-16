import React, { useContext } from 'react';

// @Context
import { SessionContext } from '../../context/';

// @Components
import { LoginComponent } from '../../components/';

const LoginContainer: React.FC = () => {
  const { onLogin, isLoading } = useContext(SessionContext);

  const onHandlerSubmit = async () => {
    onLogin &&
      onLogin({
        name: 'Daiber',
        lastName: 'Gonzalez',
        email: 'dgm@gmail.com',
      });
  };

  return (
    <LoginComponent
      submitFunction={onHandlerSubmit}
      loading={isLoading as boolean}
    />
  );
};

export default LoginContainer;
