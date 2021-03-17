import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// @Screens
import { LoginScreen } from '../Login/';
import { LibraryScreen } from '../Library';

// @Context
import { SessionContext } from '../../context/';

// @Constants
import { LOGIN_ROUTE, LIBRARY_ROUTE } from '../../constants/';

// Variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppScreen = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <SafeAreaProvider>
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
              <Tab.Navigator initialRouteName={LIBRARY_ROUTE}>
                <Tab.Screen name={LIBRARY_ROUTE} component={LibraryScreen} />
                <Tab.Screen name="Wishlist" component={LibraryScreen} />
                <Tab.Screen name="Add New" component={LibraryScreen} />
                <Tab.Screen name="Rentals" component={LibraryScreen} />
                <Tab.Screen name="Settings" component={LibraryScreen} />
              </Tab.Navigator>
            )}
          </>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppScreen;
