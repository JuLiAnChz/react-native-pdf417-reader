import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import * as Animatable from 'react-native-animatable';
import { Video } from 'expo';

export default class HiScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    capitalize(str) {
        const lower = str.toLowerCase();
        const capit = lower.replace(/\b\w/g, l => l.toUpperCase());
        return capit;
    }

    componentDidMount(){
        const userData = this.props.navigation.state.params.userData;
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Details', {userData})
        }, 6000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }

    render() {
        const { navigation } = this.props;
        const userData = navigation.getParam('userData', null);
        
        return (
        <View style={styles.container}>

            <Animatable.View animation="fadeOutLeft" delay={6000} style={styles.hiView}>
                <Animatable.View animation="fadeOut" delay={5500}>
                    <Animatable.Text animation="fadeIn" style={styles.hiViewText}>
                        ¡Hola {this.capitalize(userData.firstname)}!
                    </Animatable.Text>
                    <Animatable.Text animation="fadeIn" delay={300} style={styles.bankText}>
                        Gracias por darnos tus datos, tus cuentas bancarias ya estan vacías.
                    </Animatable.Text>
                    <Animatable.View animation="fadeIn" delay={300} style={{alignItems: 'center', marginTop: 30}}>
                        <Video
                            source={ require('../assets/confused_travolta.mp4') }
                            rate={1.0}
                            volume={0.0}
                            isMuted={true}
                            resizeMode="contain"
                            shouldPlay
                            isLooping
                            style={{ width: 250, height: 185 }}
                        />
                    </Animatable.View>
                </Animatable.View>
            </Animatable.View>

        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hiView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003054',
        
    },
    hiViewText: {
        color: '#fff',
        fontSize: 40,
        letterSpacing: 1,
        marginBottom: 20,
        textAlign: 'center',
        zIndex: 9999,
    },
    bankText: {
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
  })