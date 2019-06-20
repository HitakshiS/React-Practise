import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import CustomText from './CustomText';

function CustomButton(props) { 

	const {disabled=false} = props;
	return(
		
		<Button 
		onPress={props.onPress}
	 	title={props.title}
	 	style={styles.buttonStyle}
	 	disabled={disabled}	  	
	 	/>
	);
}

const styles = StyleSheet.create({
    buttonStyle: {
	  	color: "#841584",
        backgroundColor: 'green',
        marginBottom: 10,
        marginTop: 10
    }
});

export default CustomButton;
