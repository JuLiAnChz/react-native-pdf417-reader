import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { Font } from 'expo';

const AnimatableTouchableHighlight = Animatable.createAnimatableComponent(TouchableHighlight);

export default class HomeScreen extends React.Component {

    onPressButton() {

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.container]}>
                {/* <ImageBackground source={require('../assets/bg.jpg')} style={styles.bgImage}>
                    <Image source={require('../assets/logo.png')} style={{ width: 200, height: 33 }}/>
                </ImageBackground> */}

                <Animatable.Text style={[styles.text, styles.title]} animation="fadeIn">¡Hola!</Animatable.Text>
                <Animatable.Text style={styles.text} animation="fadeInUp" delay={500} easing="ease-in-out">
                    Para obtener tus datos sólo tenes que presionar en el siguiente botón y escanear el código de barras que hay en tu documento.
                </Animatable.Text>

                <AnimatableTouchableHighlight
                    animation="fadeInUp"
                    delay={1000}
                    easing="ease-in-out"
                    onPress={() => {
                        this.props.navigation.navigate('Decoder')
                    }}
                    style={styles.button}
                    underlayColor='#fff'
                >
                    <Text>Escanear DNI</Text>
                </AnimatableTouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003054',
    },
    bgImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingTop: 8,
        paddingRight: 15,
        paddingBottom: 8,
        paddingLeft: 15,
        marginTop: 25
    },
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
        letterSpacing: 1,
        marginBottom: 20,
    }
});
