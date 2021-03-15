import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

// @Components
import { ContainerComponent } from '../../components/';

// @Context
import { SessionContext } from '../../context/';

const LoginScreen = () => {
  const { onLogin, onLogout } = useContext(SessionContext);

  return (
    <ContainerComponent>
      <View>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => {
            onLogin &&
              onLogin({
                name: 'Daiber',
                lastName: 'Gonzalez',
                email: 'dgm@gmail.com',
              });
          }}
        />
        <Button title="Logout" onPress={() => onLogout()} />
      </View>
    </ContainerComponent>
  );
};

export default LoginScreen;
