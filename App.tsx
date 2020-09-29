import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { AppNavigator } from './src/services/router/AppNavigator';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
