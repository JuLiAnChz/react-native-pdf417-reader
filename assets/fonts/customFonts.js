import React from 'react';
import { Font } from 'expo';

export default class CustomFonts extends React.Component {

    state = {
        fontLoaded: false,
    };
    
    async componentDidMount() {
        await Font.loadAsync({
            'poppins-extra-light': require('./Poppins-ExtraLight.ttf'),
            'poppins-light': require('./Poppins-Light.ttf'),
            'poppins-regular': require('./Poppins-Regular.ttf'),
            'poppins-medium': require('./Poppins-Medium.ttf'),
            'poppins-semi-bold': require('./Poppins-SemiBold.ttf'),
            'poppins-bold': require('./Poppins-Bold.ttf'),
            'poppins-extra-bold': require('./Poppins-ExtraBold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
}