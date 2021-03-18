import React, { useContext } from 'react';
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
import { BookDetailScreen } from '../BookDetail';

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
  BOOK_DETAIL_ROUTE,
} from '../../constants/';

// @context
import { BooksState } from '../../context/';

// @Components
import { TabIcon, TabText } from './TabComponents';

// @Types
import { LibraryStackParamList } from '../../types/';

// Variables
const Stack = createStackNavigator<LibraryStackParamList>();
const Tab = createBottomTabNavigator();

const LibraryStack = () => (
  <BooksState>
    <Stack.Navigator headerMode="none" initialRouteName={LIBRARY_ROUTE}>
      <Stack.Screen name={LIBRARY_ROUTE} component={LibraryScreen} />
      <Stack.Screen name={BOOK_DETAIL_ROUTE} component={BookDetailScreen} />
    </Stack.Navigator>
  </BooksState>
);

const AppScreen = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <>
          {!isAuthenticated && (
            <Stack.Navigator headerMode="none" initialRouteName={LOGIN_ROUTE}>
              <Stack.Screen name={LOGIN_ROUTE} component={LoginScreen} />
            </Stack.Navigator>
          )}
          {isAuthenticated && (
            <Tab.Navigator initialRouteName={LIBRARY_ROUTE}>
              <Tab.Screen
                options={{
                  tabBarLabel: (props) => (
                    <TabText title={LIBRARY_ROUTE} {...props} />
                  ),
                  tabBarIcon: (props) => {
                    return <TabIcon iconName="library-outline" {...props} />;
                  },
                }}
                name={LIBRARY_ROUTE}
                component={LibraryStack}
              />
              <Tab.Screen
                options={{
                  tabBarLabel: (props) => (
                    <TabText title={WISHLIST_ROUTE} {...props} />
                  ),
                  tabBarIcon: (props) => {
                    return <TabIcon iconName="star-outline" {...props} />;
                  },
                }}
                name={WISHLIST_ROUTE}
                component={WishListScreen}
              />
              <Tab.Screen
                options={{
                  tabBarLabel: (props) => (
                    <TabText title={ADD_NEW_ROUTE} {...props} />
                  ),
                  tabBarIcon: (props) => {
                    return <TabIcon iconName="add-circle-outline" {...props} />;
                  },
                }}
                name={ADD_NEW_ROUTE}
                component={AddNewScreen}
              />
              <Tab.Screen
                options={{
                  tabBarLabel: (props) => (
                    <TabText title={RENTALS_ROUTE} {...props} />
                  ),
                  tabBarIcon: (props) => {
                    return (
                      <TabIcon iconName="checkmark-circle-outline" {...props} />
                    );
                  },
                }}
                name={RENTALS_ROUTE}
                component={RentalsScreen}
              />
              <Tab.Screen
                options={{
                  tabBarLabel: (props) => (
                    <TabText title={SETTINGS_ROUTE} {...props} />
                  ),
                  tabBarIcon: (props) => {
                    return <TabIcon iconName="settings-outline" {...props} />;
                  },
                }}
                name={SETTINGS_ROUTE}
                component={SettingsScreen}
              />
            </Tab.Navigator>
          )}
        </>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppScreen;
