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
import { createStore } from 'redux'
import reducer from './app/store/Reducer'


export default class App extends Component{
 
  render() {
    return (
    	 <Provider store={createStore(reducer)}>
        <AppNavigatorOne/>
        </Provider>
      );
  }
}