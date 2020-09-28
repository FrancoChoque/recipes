import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedInNavigation, LoggedOutNavigation } from './routes';

export const AppNavigator = () => (
  <NavigationContainer>
    <LoggedOutNavigation />
  </NavigationContainer>
);
