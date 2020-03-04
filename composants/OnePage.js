import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Inscription extends React.Component {
    static navigationOptions = {
        title: 'One',
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Say hello to your new app</Text>
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => this.props.navigation.navigate('LoginP')}>
                        <Text style={styles.buttontext}> Log In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => this.props.navigation.navigate('Inscription')}>
                        <Text style={styles.buttontext}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderColor: 'gray'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f5576c',
        paddingVertical: 10,
        justifyContent: 'center',
        margin: 20,
        borderColor: 'gray'
    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        margin: 20,
        borderColor: 'gray'
    },
    text: {
        textAlign: 'center',
        color: '#f5576c',
        fontSize: 25,
        margin: 30
    }
}