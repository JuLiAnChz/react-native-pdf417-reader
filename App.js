import { createStackNavigator } from 'react-navigation';

// Components
import HomeScreen from './components/homeScreen';
import CodeDecoder from './components/codeDecoder';
import DetailsScreen from './components/detailsComponent';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Decoder: {
    screen: CodeDecoder,
  },
  Details: {
    screen: DetailsScreen
  },
}, {
    initialRouteName: 'Home',
});