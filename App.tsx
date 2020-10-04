import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import getStore from './src/store/configureStore';

import AppNavigator from './src/services/router/AppNavigator';

const store = getStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
