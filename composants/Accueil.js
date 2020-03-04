import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { createStackNavigator } from 'react-navigation';
//import Inscription from './composants/Inscription'


export default class Accueil extends React.Component {
    static navigationOptions = {
        title: 'Acc',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Bienvenue sur la page d'accueil</Text>
            </View>
        );
    }
}
const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    text: {
        textAlign: 'center',
        color: '#f5576c',
        fontSize: 50
    }
}