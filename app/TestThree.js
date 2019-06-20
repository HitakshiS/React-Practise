import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TestThree extends Component{

  static navigationOptions = {
    title: 'TestThree'
  };

	render() {
		return(
				<View style={{flex: 1, backgroundColor: "#CAE1FF"}}>
					<View style={{flexDirection: "row", flex: 1}}>
						<Text style={[styles.textStyle, {flex: 1, textAlign: "left"}]}>Top Left</Text>
						<Text style={[styles.textStyle,{flex: 1, textAlign: "right"}]}>Top Right</Text>
					</View>
					<Text style={styles.textStyle}>Center</Text>
					<View style={{flexDirection: "row", alignItems: "flex-end", flex: 1}}>
						<Text style={[styles.textStyle,{flex: 1, textAlign: "left"}]}>Bottom Left</Text>
						<Text style={[styles.textStyle,{flex: 1, textAlign: "right"}]}>Bottom Right</Text>
					</View>
				</View>
		);
	}
}
const styles = StyleSheet.create({
  textStyle: {
 	color: "black", 
 	fontSize: 20,
 	textAlign: "center"
  }
});