import React, {Component} from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HeaderImage extends Component {
  render() {
    return (
      <Image
        source={{uri: "https://img.etimg.com/thumb/height-480,width-640,imgsize-493887,msid-57052337/.jpg"}}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}