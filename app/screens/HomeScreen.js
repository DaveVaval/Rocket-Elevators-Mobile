import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image, 
    Button, 
    TextInput, 
    Dimensions, 
    Alert,
    TouchableOpacity,
    Text
} from 'react-native';
import ElevatorStatusScreen from './ElevatorStatusScreen';

// const height = Dimensions

const bottomTabNavigator = createBottomTabNavigator(
    {
      Home: HomeScreen,
      Elevator: ElevatorStatusScreen,
    },
    {
      initialRouteName: 'Home'
    }
);

function HomeScreen({navigation, route}) {
    console.log('hello')
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            <Text>Home</Text>
            <View style={styles.navbar}>
                <Image source={require('../assets/whiteback.jpg')}>
                    
                </Image>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbar: {
        width: '100%',
        height: 10,
        backgroundColor: 'blue',
        top: 350
    }
});