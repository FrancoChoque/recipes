import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedInNavigation, LoggedOutNavigation } from './routes';

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

const AppNavigator = ({ user }) => (
  <NavigationContainer>
    {user ? <LoggedInNavigation /> : <LoggedOutNavigation />}
  </NavigationContainer>
);

export default connect(mapStateToProps)(AppNavigator);
