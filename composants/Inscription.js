import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Button, Text } from 'react-native';
//import { createStackNavigator } from 'react-navigation';


export default class LoginP extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textfields}>
                    <Text style = {styles.text}> Create new account</Text>
                <TextInput style={styles.input}
                        placeholder="Full name "
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus}
                        keyboardType="Nom/Prenom"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                <TextInput style={styles.input}
                        placeholder="Phone Number "
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus}
                        keyboardType="Email/Adresse"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        placeholder="E-mail or phone number "
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus}
                        keyboardType="Email/Adresse"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => this.props.navigation.navigate('Accueil')}>
                        <Text style={styles.buttontext}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#f5576c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f5576c',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    },
    text: {
        margin: 40,
        textAlign: 'left',
        fontSize: 25,
        color: '#f5576c'
    },
    button: {
        borderRadius: 100,
        height: 50
    }
}