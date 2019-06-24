import axios from "axios";
import {Text, View, ScrollView, ActivityIndicator} from "react-native";
import React, {Component} from "react";
import CustomButton from "./CustomButton";

export default class ApiTest extends Component {

	constructor() {
		super();
		this.state = {
			employeeList: [],
		}
	}

	apiTestCall = () => {

		axios.get('http://dummy.restapiexample.com/api/v1/employees')
		  .then((response) => {
		    // handle success'
		    if(response.status == 200) {
		    	this.setState({
		    		employeeList : response.data
			    });
		    }
		    
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		});
	}

	componentDidMount() {
		this.apiTestCall();
	}

	employeesListFun = () => {
		return this.state.employeeList && this.state.employeeList.map((value, index) => {
			return (
					<View key={index} style={{flex:1, flexDirection:"row"}}>
						<Text style={{flex:1, textAlign:"center"}}>{`${value.id}`}</Text>
						<Text style={{flex:1, textAlign:"center"}}>{`${value.employee_name}`}</Text>
						<Text style={{flex:1, textAlign:"center"}}>{`${value.employee_salary}`}</Text>
						<Text style={{flex:1, textAlign:"center"}}>{`${value.employee_age}`}</Text>
					</View>
				
			);
		});
	} 


	render () {
		return (
				<View style={{flex:1}}>
					{(this.state.employeeList && this.state.employeeList.length) ? 
						(<ScrollView >{this.employeesListFun()}</ScrollView> ): 
					(<ActivityIndicator style={{justifyContent:"center", alignItems:"center"}} size="large"/>)}
				</View>			
		);
	}
}