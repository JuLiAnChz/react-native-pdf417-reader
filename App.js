import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Components
import HomeScreen from './components/homeScreen';
import CodeDecoderScreen from './components/codeDecoderScreen';
import HiScreen from './components/hiScreen'
import DetailsScreen from './components/detailsScreen';

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            header: null
        }
    },
    Decoder: {
        screen: CodeDecoderScreen,
        navigationOptions: {
            title: 'Escaner',
        }
    },
    Hi: {
        screen: HiScreen,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            title: 'Detalles',
        }
    },
},
{
  initialRouteName: 'Home',
});