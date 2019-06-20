import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TestTwo extends Component{

static navigationOptions = {
    title: 'TestTwo'
 };


	render() {
		return(
			<View style={{flex: 1, justifyContent:"space-between", alignItems:"center"}}>
				<Text>Top text</Text>
					<View style={{flexDirection:"row"}}>
						<Text style={{flex: 1, textAlign: 'center'}}>left text</Text>
						<Text style={{flex: 1, textAlign: 'center'}}>Center text</Text>
						<Text style={{flex: 1, textAlign: 'center'}}>Right text</Text>
					</View>
				<Text>Bottom text</Text>
			</View>
		);
	}
}