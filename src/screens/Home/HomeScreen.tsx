import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

// @Components
import { ContainerComponent } from '../../components/';

// @Context
import { SessionContext } from '../../context/';

const HomeScreen = () => {
  const { onLogout } = useContext(SessionContext);

  return (
    <ContainerComponent>
      <View>
        <Text>Home</Text>
        <Button
          title="Logout"
          onPress={() => {
            onLogout && onLogout();
          }}
        />
      </View>
    </ContainerComponent>
  );
};

export default HomeScreen;
