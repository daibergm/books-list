import React, { useContext } from 'react';

// @Context
import { SessionContext } from '../../context/';

// @Components
import { LoginComponent } from '../../components/';

// @types
import { User } from '../../types/session';

const LoginContainer: React.FC = () => {
  const { onLogin, isLoading } = useContext(SessionContext);

  const onHandlerSubmit = async (data: User) => {
    onLogin && onLogin(data);
  };

  return (
    <LoginComponent
      submitFunction={onHandlerSubmit}
      loading={isLoading as boolean}
    />
  );
};

export default LoginContainer;
