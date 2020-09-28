import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/Home/Home';
import { SearchScreen } from '../screens/Search/Search';
import { FavoritesScreen } from '../screens/Favorites/Favorites';
import { ProfileScreen } from '../screens/Profile/Profile';
import { WelcomeScreen } from '../screens/Welcome/Welcome';

const Tab = createBottomTabNavigator();

function getIconName(iconName, focused) {
  return focused ? iconName : `${iconName}-outline`;
}

export const LoggedInNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = getIconName('home', focused);
        } else if (route.name === 'Search') {
          iconName = getIconName('search', focused);
        } else if (route.name === 'Favorites') {
          iconName = getIconName('heart', focused);
        } else if (route.name === 'Profile') {
          iconName = getIconName('person', focused);
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
export const LoggedOutNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>
);
