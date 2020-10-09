import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './src/data/store';
import Main from './src/screens/Main';

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <Main />
      <StatusBar />
    </Provider>
  </SafeAreaProvider>
);

export default App;
