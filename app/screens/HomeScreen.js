import React, { useEffect } from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View,
    Dimensions,
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
    const [loading, isLoading] = React.useState();
    const { logout } = React.useContext(AuthContext);

    useEffect(() => {
        navigation.addListener('focus', () => {
            isLoading(true)
        });
    },[])
    // Call to the api to get the list of elevators
    if(loading){
        axios.get('http://daverocketrestapi.azurewebsites.net/api/Elevators/status/Stopped')
            .then(response => {
                setElevators([])
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
                });
            })
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
                keyExtractor={(item) => item.id.toString()}
                data={elevatorList}
                renderItem={({item}) =>(
                    <TouchableOpacity style={styles.item} onPress={() => {
                        navigation.navigate('Elevator Status', {Elevator: item})
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
        backgroundColor: '#2e6f95',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
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