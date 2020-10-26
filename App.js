import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/src/screens/HomeScreen";
import ComponentScreen from "./src/src/screens/ComponentScreen"
import ListScreen from './src/src/screens/listScreen';
import ImageScreen from './src/src/screens/ImageScreen';
import CounterScreen from './src/src/screens/CounterScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen, 
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
