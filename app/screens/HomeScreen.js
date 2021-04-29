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
    FlatList,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../components/context';
const axios = require('axios').default;

const {width: WIDTH} = Dimensions.get('window')
   
function HomeScreen({navigation, route}) {
    const [elevatorList, setElevators] = React.useState([]);
    const [loading, isLoading] = React.useState(true);
    
    useEffect(() => {
        console.log('Home Screen')
        axios.get('http://daverocketrestapi.azurewebsites.net/api/Elevators/status/Stopped')
            .then(response => {
                console.log('Response!')
                response.data.forEach(e => {
                    const elevator = {
                        id: e.id,
                        type: e.elevatorType,
                        model: e.model,
                        status: e.status,
                        serial: e.serialNumber
                    }
                    isLoading(false);
                    setElevators(f => [...f, elevator]);
                    // elevatorList.push(elevator)
                    
                });
            })
    },[]);

    

    const { logout } = React.useContext(AuthContext);
    
    if(loading){
        return(
          <View style={[styles.loading, styles.loadingHori]}>
              <ActivityIndicator size='large' color='#0466c8'/>
          </View>
        );
    }

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
                        console.log(item)
                        // setData(item)
                        navigation.navigate('Elevator Status', {Elevator: "test"})
                        }}>
                        <Text>Elevator: {item.id}</Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity style={styles.logoutButton} onPress={() =>{logout()}}>
                <Text style={styles.logoutText}>LOGOUT</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}


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
        
    },
    loading: {
        flex: 1,
        justifyContent: "center"
    },
    loadingHori: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default HomeScreen;