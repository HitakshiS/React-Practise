import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator} from "react-navigation";
import TestTwo from './TestTwo';
import HomeScreen from './HomeScreen';
import TestOne from './TestOne';
import TestThree from './TestThree';

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
  AppNavigator: AppNavigatorOne,
  TabNavigator: TabNavigator,
});

const MySwitchNavigator = createSwitchNavigator({
  Home1: AppNavigatorOne,
  AppNavigatorThree1: AppNavigatorThree,
});

export default createAppContainer(TabNavigator);