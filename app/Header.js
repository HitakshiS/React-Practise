import React, {Component} from 'react';
import {Button, View} from 'react-native';
import CustomButton from './CustomButton';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HeaderImage from './HeaderImage';
import HeaderButton from './HeaderButton';

export default class Header extends Component {
  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerRight: <HeaderButton />
}
