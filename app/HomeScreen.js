import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import CustomButton from './CustomButton';
import HeaderImage from './HeaderImage';
import HeaderButton from './HeaderButton';
import I18n from "./I18n";
import * as RNLocalize from "react-native-localize";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {addCounterVal, subCounterVal, reset} from "./store/Action"



class HomeScreen extends Component {
  	constructor() {
 		super();
 		this.state={
 		ColorHolder : '#00BCD4'
 		}
  	}

  	async handleLocales() {
  		this.locales = RNLocalize.getLocales();
	}

	getLocale() {
  		if (this.locales) {
	    	if (Array.isArray(this.locales)) {
	      		return this.locales[0];
	    	}
	  	}
	  	return null;
	}
 
	ChangeColorFunction=()=>
	{
 		var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 		this.setState({
 		ColorHolder : ColorCode
 	});
	}
 	static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: "Home",
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
	         	title={I18n.t("TestOne")}
	         	onPress={() => { this.props.navigation.navigate("ForthScreen", {
              	otherParam: 'My first screen',
            	});
	         	}}
	        	/>
    			<CustomButton onPress={()=> this.props.addCounterVal()} title="Increment"/>
				<Text style={{textAlign:'center', fontSize:30}}>{this.props.reducer.counter}</Text>
    			<CustomButton onPress={()=> this.props.subCounterVal()} title="Decrement" disabled= {this.props.reducer.counter > 0 ? false: true}/>
    			<CustomButton onPress={()=> this.props.reset()} title="Reset"/>

    			<CustomButton onPress={()=> this.props.navigation.openDrawer()} title="API Test"/>
		 		
		 		<CustomButton 
		         	title={I18n.t("TestTwo")}
		         	onPress={() => this.props.navigation.navigate("SecondScreen")}
	        	/>
		 		<CustomButton 
		         	title={I18n.t("TestThree")}
		         	onPress={() => this.props.navigation.navigate("ThirdScreen")}
	        	/>
	        </View>
	 	);
	}
}
const mapStateToProps = (state) => {
 return {
   reducer: state.reducer
 };
};

const mapDispatchToProps = dispatch => (
 bindActionCreators({
   addCounterVal,
   subCounterVal,
   reset,
 }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

