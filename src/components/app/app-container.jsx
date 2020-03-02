import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import AppView from './app-view';

function App() {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
}

export default hot(App);
