import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// @Screens
import { LoginScreen } from '../Login/';
import { HomeScreen } from '../Home/';

// Variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          {true && (
            <Stack.Navigator headerMode="none" initialRouteName={'LOGIN'}>
              <Stack.Screen name={'LOGIN'} component={LoginScreen} />
            </Stack.Navigator>
          )}
          {false && (
            <Tab.Navigator initialRouteName={'HOME'}>
              <Tab.Screen name={'HOME'} component={HomeScreen} />
            </Tab.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default AppScreen;
