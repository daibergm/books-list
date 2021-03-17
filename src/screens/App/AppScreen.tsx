import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// @Screens
import { LoginScreen } from '../Login/';
import { LibraryScreen } from '../Library/';
import { WishListScreen } from '../WishList/';
import { AddNewScreen } from '../AddNew/';
import { RentalsScreen } from '../Rentals/';
import { SettingsScreen } from '../Settings/';

// @Context
import { SessionContext } from '../../context/';

// @Constants
import {
  LOGIN_ROUTE,
  LIBRARY_ROUTE,
  WISHLIST_ROUTE,
  ADD_NEW_ROUTE,
  RENTALS_ROUTE,
  SETTINGS_ROUTE,
} from '../../constants/';

// @context
import { BooksState } from '../../context/';

// Variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LibraryStack = () => (
  <BooksState>
    <Stack.Navigator headerMode="none" initialRouteName={LIBRARY_ROUTE}>
      <Stack.Screen name={LIBRARY_ROUTE} component={LibraryScreen} />
    </Stack.Navigator>
  </BooksState>
);

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
                <Tab.Screen name={LIBRARY_ROUTE} component={LibraryStack} />
                <Tab.Screen name={WISHLIST_ROUTE} component={WishListScreen} />
                <Tab.Screen name={ADD_NEW_ROUTE} component={AddNewScreen} />
                <Tab.Screen name={RENTALS_ROUTE} component={RentalsScreen} />
                <Tab.Screen name={SETTINGS_ROUTE} component={SettingsScreen} />
              </Tab.Navigator>
            )}
          </>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppScreen;
