import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchScreen } from 'screens/Search/Search';
import { FavoritesScreen } from 'screens/Favorites/Favorites';
import { ProfileScreen } from 'screens/Profile/Profile';
import { WelcomeScreen } from 'screens/Welcome/Welcome';
import LoginScreen from 'screens/User/Login/Login';
import HomeScreen from 'screens/Home/Home';
import RecipeScreen from 'screens/Recipe/Recipe';
import InstructionsScreen from 'screens/Recipe/Instructions/Instructions';

const Tab = createBottomTabNavigator();

function getIconName(iconName, focused) {
  return focused ? iconName : `${iconName}-outline`;
}

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
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
    <Tab.Screen name="Feed" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const LoggedStack = createStackNavigator();

export const LoggedInNavigation = () => (
  <LoggedStack.Navigator initialRouteName="Home">
    <LoggedStack.Screen
      component={RecipeScreen}
      name="Recipe"
      options={{ headerShown: false }}
    />
    <LoggedStack.Screen
      component={InstructionsScreen}
      name="Instructions"
      options={{ headerShown: false }}
    />
    <LoggedStack.Screen
      component={HomeTabs}
      name="Home"
      options={{ headerShown: false }}
    />
  </LoggedStack.Navigator>
);

const Stack = createStackNavigator();
export const LoggedOutNavigation = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
