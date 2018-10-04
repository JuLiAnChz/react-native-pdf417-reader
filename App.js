import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

// Components
import HomeScreen from './components/homeScreen';
import OpenCamera from './components/openCamera';
import DetailsScreen from './components/detailsComponent';


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Camera: {
    screen: OpenCamera,
  },
  Details: {
    screen: DetailsScreen
  },
}, {
    initialRouteName: 'Home',
});