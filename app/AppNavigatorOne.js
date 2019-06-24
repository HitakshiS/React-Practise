import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator} from "react-navigation";
import TestTwo from './TestTwo';
import HomeScreen from './HomeScreen';
import TestOne from './TestOne';
import TestThree from './TestThree';
import ApiTest from './ApiTest';

const AppNavigatorOne = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SecondScreen: {
    screen: TestTwo
  },
  ThirdScreen: {
    screen: TestThree
  },
  ForthScreen: {
    screen: TestOne
  }
});

const AppNavigatorThree = createStackNavigator({
  SecondScreen: {
    screen: TestTwo
  },
  ForthScreen: {
    screen: TestOne
  }
});

const AppNavigatorTwo = createStackNavigator({
  ThirdScreen: {
    screen: TestThree
  },
  ForthScreen: {
    screen: TestOne
  }
});

const TabNavigator = createBottomTabNavigator({
  AppNavigatorOne: AppNavigatorOne,
  AppNavigatorTwo: AppNavigatorTwo,
  AppNavigatorThree: AppNavigatorThree,
});

const MyDrawerNavigator = createDrawerNavigator({
  TabNavigator: TabNavigator,
  ApiTest:ApiTest
});

const MySwitchNavigator = createSwitchNavigator({
  Home1: MyDrawerNavigator,
  AppNavigatorThree1: AppNavigatorThree,
});

export default createAppContainer(MyDrawerNavigator);