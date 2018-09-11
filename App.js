import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {

    var config = {
      apiKey: 'AIzaSyCKQTePMHsLFV8QlZzxRITuwKHC2u2fJnA',
      authDomain: 'manager-bbcc6.firebaseapp.com',
      databaseURL: 'https://manager-bbcc6.firebaseio.com',
      projectId: 'manager-bbcc6',
      storageBucket: 'manager-bbcc6.appspot.com',
      messagingSenderId: '473072087765'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
