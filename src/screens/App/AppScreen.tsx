import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// @Screens
import { LoginScreen } from '../Login/';
import { HomeScreen } from '../Home/';

// @Context
import { SessionContext } from '../../context/';

// @Constants
import { LOGIN_ROUTE, HOME_ROUTE } from '../../constants/';

// Variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppScreen = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <NavigationContainer>
      {false && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {true && (
        <>
          {!isAuthenticated && (
            <Stack.Navigator headerMode="none" initialRouteName={LOGIN_ROUTE}>
              <Stack.Screen name={LOGIN_ROUTE} component={LoginScreen} />
            </Stack.Navigator>
          )}
          {isAuthenticated && (
            <Tab.Navigator initialRouteName={HOME_ROUTE}>
              <Tab.Screen name={HOME_ROUTE} component={HomeScreen} />
            </Tab.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default AppScreen;
