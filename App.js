/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import SampleScreen from './src/screens/SampleScreen';

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SampleScreen />
    </Provider>
  );
};

export default App;
