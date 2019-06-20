import React, {Component} from 'react';
import {Text, View} from 'react-native';

function CustomText(props) {
	return(
		<Text style={{color: "black", fontSize: 56}}>
		{props.title}
		</Text>
	);
}

export default CustomText;