import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
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
import ElevatorStatusScreen from './ElevatorStatusScreen';
import { AuthContext } from '../components/context';

const {width: WIDTH} = Dimensions.get('window')

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

function HomeScreen({navigation, route}) {
    console.log('hello')
    const { logout } = React.useContext(AuthContext);

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        // <Stack.Navigator>
        //         <Stack.Screen name='Home'/>
        //         <Stack.Screen name='Elevators' component={ElevatorStatusScreen}/>
        // </Stack.Navigator>
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            
            <Text>HomeScreen</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button title='Go to elevators' onPress={() => navigation.navigate('Elevators')}/>

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