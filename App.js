/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import AppNavigatorOne from './app/AppNavigatorOne';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './app/store/Reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './app/store/RootSaga'
import {logger} from 'redux-logger'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default class App extends Component{
 
  render() {

    return (
    	 <Provider store={store}>
        	<AppNavigatorOne/>
        </Provider>

      );
  }
}