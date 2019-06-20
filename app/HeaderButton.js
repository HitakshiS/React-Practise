import React, {Component} from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CustomButton from './CustomButton';


export default class HeaderButton extends Component {
  	constructor() {
 		super();
 		this.state={
 		ColorHolder : '#00BCD4'
 		}
  	}
 
	ChangeColorFunction=()=>
	{
 		var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 		this.setState({
 		ColorHolder : ColorCode
 	})
	}

  render() {
    return (
	 		<View style={{backgroundColor: this.state.ColorHolder}}>
			    <CustomButton
			        onPress={this.ChangeColorFunction}
			        title={"background"}
			    />
			</View>
    );
  }
}