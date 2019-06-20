import React, {Component} from 'react';
import {Button, View} from 'react-native';
import CustomButton from './CustomButton';
import HeaderImage from './HeaderImage';
import HeaderButton from './HeaderButton';

export default class HomeScreen extends Component {
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
 	static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'Home',
      headerLeft: <HeaderImage />,
      headerRight: <CustomButton title="Background" onPress={() => state.params.handleSave()} />,
    }
  }

	componentDidMount() {
    	this.props.navigation.setParams({ handleSave: () => this.ChangeColorFunction() })
  	}
	render() {
	 	return(
	 		<View style={{justifyContent: "space-around", flex: 1, paddingHorizontal:80, backgroundColor: this.state.ColorHolder}}>
		 		<CustomButton 
	         	title="TestOne"
	         	onPress={() => { this.props.navigation.navigate("ForthScreen", {
              	otherParam: 'My first screen',
            	});
	         	}}
	        	/>

		 		<CustomButton 
	         	title="TestTwo"
	         	onPress={() => this.props.navigation.navigate("SecondScreen")}
	        	/>

		 		<CustomButton 
	         	title="TestThree"
	         	onPress={() => this.props.navigation.navigate("ThirdScreen")}
	        	/>
	        </View>
	 	);
	}
}
