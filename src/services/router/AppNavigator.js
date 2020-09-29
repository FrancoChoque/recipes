import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedOutNavigation } from './routes';

export const AppNavigator = () => (
  <NavigationContainer>
    <LoggedOutNavigation />
  </NavigationContainer>
);
