import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Login = () => (
  <View>
    <Text>Login</Text>
  </View>
);

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const AppScreen = () => {
  return (
    <NavigationContainer>
      {false && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {true && (
        <>
          {false && (
            <Stack.Navigator headerMode="none" initialRouteName={'LOGIN'}>
              <Stack.Screen name={'LOGIN'} component={Login} />
            </Stack.Navigator>
          )}
          {true && (
            <Tab.Navigator initialRouteName={'HOME'}>
              <Tab.Screen name={'HOME'} component={Home} />
            </Tab.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default AppScreen;
