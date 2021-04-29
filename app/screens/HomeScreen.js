import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
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
    Text,
    FlatList
} from 'react-native';
import { AuthContext } from '../components/context';

const {width: WIDTH} = Dimensions.get('window')

function HomeScreen({navigation, route}) {
    console.log('Home Screen')
    const { logout } = React.useContext(AuthContext);

    const [elevatorList, setElevators] = React.useState([]);

    useEffect(() => {
        console.log('Api call!')
        fetch('http://daverocketrestapi.azurewebsites.net/api/Elevators/status/Stopped')
                .then(result => result.json())
                    .then((response) => {
                        console.log('Got the response!');
                        for(let i = 0; i < response.length; i++){
                            const elevator = {
                                id: response[i].id,
                                type: response[i].elevatorType,
                                model: response[i].model,
                                status: response[i].status,
                                serial: response[i].serialNumber
                            }
                            setElevators(f => [...f, elevator]);
                        }
                        console.log('Elevator List is full!');
                        console.log('Elevator 1: ', elevatorList[0]);
                    })    
    }, []);


    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            <FlatList
                keyExtractor={(item) => item.id}
                data={elevatorList}
                renderItem={({item}) =>(
                    <TouchableOpacity style={styles.item} onPress={() => {
                        Alert.alert("Elevator: ", JSON.stringify(item));
                        navigation.navigate('Elevator Status')
                        }}>
                        <Text>Elevator: {item.id}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* {elevatorList != null ? (
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={elevatorList}
                    renderItem={({item}) =>(
                        <TouchableOpacity style={styles.item}>
                            <Text>Elevator: {item.id}</Text>
                        </TouchableOpacity>
                    )}
                />
            )
            :
                <Text>lel</Text>
            } */}

            <Button title='Go to elevators' onPress={() => navigation.navigate('Elevator Status')}/>

            <TouchableOpacity style={styles.logoutButton} onPress={() =>{logout()}}>
                <Text style={styles.logoutText}>LOGOUT</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoutButton: {
        width: WIDTH,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    logoutText: {
       color: 'rgba(255,255,255,0.7)',
       fontSize: 16,
       textAlign: 'center',
    },
    item: {
        width: WIDTH - 55,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    listContainer: {
        
    }
});