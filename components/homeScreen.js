import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {
  
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            title="Escanear DNI"
            onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Decoder' })
                ],
                }))
            }}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
