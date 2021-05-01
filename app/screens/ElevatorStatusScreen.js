import React from 'react';
import { 
    ImageBackground, 
    StyleSheet,
    Dimensions, 
    Alert,
    TouchableOpacity,
    Text
} from 'react-native';
const axios = require('axios').default;
const {width: WIDTH} = Dimensions.get('window')


function ElevatorStatusScreen({navigation, route}) {
    const { Elevator } = route.params;
    const [elevatorStatus, setEleStatus] = React.useState(Elevator.status);
    const [statusColor, setColorStatus] = React.useState('red');

    const endtask = () => {
        axios.get(`http://daverocketrestapi.azurewebsites.net/api/Elevators/update/Operational/${Elevator.id}`)
        .then(response => {
            if(response.status == 200){
                Alert.alert('Status has been changed to Operatinal!')
                setColorStatus('green')
                setEleStatus('Operational');
            }
        })
    }
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/whiteback.jpg')}
        >
            <Text style={styles.title}>Elevator: {Elevator.id}</Text>
            <Text style={{ color: statusColor }}>{elevatorStatus}</Text>
            <Text>Type: {Elevator.type}</Text>
            <Text>Model: {Elevator.model}</Text>
            <Text>Serial: {Elevator.serial}</Text>
            {elevatorStatus === 'Stopped' ? (
                <TouchableOpacity style={styles.endTask} onPress={() => endtask()}>
                    <Text style={styles.endText}>END TASK</Text>
                </TouchableOpacity>
            )
            :
                <TouchableOpacity style={styles.confirm} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={styles.endText}>CONFIRM</Text>
                </TouchableOpacity>
            }
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    confirm: {
        width: WIDTH,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    elevatorContainer: {
        width: WIDTH - 55,
        height: '50%',
        backgroundColor: 'red',
    },
    endTask: {
        width: WIDTH,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    endText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    navbar: {
        width: '100%',
        height: 10,
        backgroundColor: 'blue',
        top: 350
    },
    status: {
        color: 'red'
    },
    title: {
        fontSize: 35,
        color: 'gray',
        fontFamily: 'sans-serif-light',
        alignSelf: 'flex-start',
        paddingLeft: 20,
        position: 'relative',
        paddingBottom: 250
    }
});
export default ElevatorStatusScreen;