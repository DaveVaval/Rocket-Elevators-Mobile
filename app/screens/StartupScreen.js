import React, { useState } from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image, 
    TextInput, 
    Dimensions, 
    Alert,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../components/context';

const {width: WIDTH} = Dimensions.get('window')


function StartupScreen({navigation}) {

    const [email, setEmail] = useState('');

    const { login } = React.useContext(AuthContext);

    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            <Image style={styles.logo} source={require('../assets/R3.png')}/>

            <View style={styles.inputContainer}>
                <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    underlineColorAndroid='transparent'
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}
                />
            </View>
            {/* Call to the api to check if the user is an employee */}
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                return fetch(`http://daverocketrestapi.azurewebsites.net/api/Mobile/${email}`)
                    .then((response) => {
                        if (response.status == 200){
                            login()
                        }
                        else{
                            Alert.alert('Not found!');
                        }
                    })
            }}>
                <Text style={styles.loginText}>login</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
       color: 'rgba(255,255,255,0.7)',
       fontSize: 16,
       textAlign: 'center'
    },
    logo: {
        width: 285,
        height: 100,
        position: 'absolute',
        top: 120
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: '#FFF',
        marginHorizontal: 25
    },
    inputContainer: {
        marginTop: 10
    },
    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 37
    }
})

export default StartupScreen;