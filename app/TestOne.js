import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import TestTwo from './TestTwo';
import TestThree from './TestThree';


export default class TestOne extends Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
      tempImageUrl:null,
      disabled: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  onButtonPress= () => {

    this.setState({

      imageUrl :  ((this.state.isLoggedIn) ? this.state.tempImageUrl : this.state.imageUrl) ,
      disabled: false,

      }, ()=> {
        this.setState((prevState) => ({            
            isLoggedIn: !prevState.isLoggedIn,
          })
        );
      }
    );
  }

  onImageChange= () => {
    this.setState({
      disabled: true,
      tempImageUrl: this.state.imageUrl,
      imageUrl: "https://img.etimg.com/thumb/height-480,width-640,imgsize-493887,msid-57052337/.jpg"
    });
  }


  render() {

    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
        <View style={styles.loginStyle}>
          <View style={[styles.textStyle, {backgroundColor: this.state.isLoggedIn ? 'yellow':'#E1BEE7'}]}>
            {this.state.isLoggedIn?<CustomButton title={"Change Image"} onPress={this.onImageChange} 
            disabled={this.state.disabled}/>:<CustomText title={this.state.isLoggedIn ? "Logged Out" : "Logged In"} />}
          </View>
          <View style={styles.buttonViewStyle}>
            <CustomButton 
              title={this.state.isLoggedIn ? "Logged Out" : "Logged In"} 
              onPress={this.onButtonPress}/>     
          </View>
          <View style={{flex:0.6}}>
            <View style={[styles.containerElementsStyle, {backgroundColor: 'green'}]}>
            </View>
            <View style={{backgroundColor: 'grey',flexDirection:"row", flex: 1}}>
              <View style={[styles.containerElementsStyle, {backgroundColor: 'blue'}]}>
              </View>
              <View style={styles.imageStyles}>
                 <Image 
                  style={{width: 50, height: 50}}
                  source={{uri: this.state.imageUrl}}
                  />
              </View>
              <View style={[styles.containerElementsStyle, {backgroundColor: 'orange'}]}>
              </View>
            </View>
            <View style={[styles.containerElementsStyle, {backgroundColor: 'pink', justifyContent: "space-around", flex: 1, flexDirection: "row"}]}>
            <CustomButton title={"TestTwo"}
            onPress={() => this.props.navigation.navigate("SecondScreen")}/>
            <CustomButton title={"TestThree"}
            onPress={() => this.props.navigation.navigate("ThirdScreen")}/>
            </View>
          </View>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  loginStyle: {
    flex:1, 
    justifyContent:"flex-end"
  },
  textStyle: {
    justifyContent:"center", 
    flex:1, 
    alignItems:"center"
  },
  imageStyles: {
    backgroundColor: 'black', 
    flex: 2, 
    justifyContent:"center", 
    alignItems:"center"
  }, 
  buttonViewStyle: {
    justifyContent:"center", 
    flex:0.1, 
    alignItems:"center"
  },
  containerElementsStyle: {
    backgroundColor: 'pink', 
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
  }
});

