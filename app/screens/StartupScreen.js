import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

function StartupScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/back.png')}
        >
            <Image style={styles.logo} source={require('../assets/R3.png')}/>
            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#80ffdb'
    },
    logo: {
        width: 285,
        height: 100,
        position: 'absolute',
        top: 70
    }
})

export default StartupScreen;