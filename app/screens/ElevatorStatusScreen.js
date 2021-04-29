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


function ElevatorStatusScreen({navigation, route}) {
    const { Elevator } = route.params;
    console.log("Elevator Screen: ", Elevator.id)
    
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            <Text>Elevator</Text>

            <View style={styles.navbar}>
                <Image source={require('../assets/whiteback.jpg')}>
                    
                </Image>
            </View>
        </ImageBackground>
    );
}


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
export default ElevatorStatusScreen;