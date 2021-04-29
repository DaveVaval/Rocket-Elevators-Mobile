import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight,
  Image, 
  SafeAreaView, 
  Button,
  Alert,
  Platform,
  Dimensions,
  ActivityIndicator
} from 'react-native';

import StartupScreen from './app/screens/StartupScreen';
import HomeScreen from './app/screens/HomeScreen';
import ElevatorStatusScreen from './app/screens/ElevatorStatusScreen';
import { AuthContext } from './app/components/context';

const Stack = createStackNavigator();


export default function App() {

  // const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('bruh');
      // setIsLoading(true);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1000);
    },
    logout: () => {
      setUserToken(null);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    },
    refresh: (bruh) => {
      setIsLoading(bruh);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }));

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if(isLoading){
  //   return(
  //     <View style={[styles.loading, styles.loadingHori]}>
  //         <ActivityIndicator size='large' color='#0466c8'/>
  //     </View>
  //   );
  // }

  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken === 'bruh' ? (
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Elevator Status' component={ElevatorStatusScreen}/>
          </Stack.Navigator>
        )
      :
        <StartupScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.height : 0
  },
  back: {
    backgroundColor: 'orange'
  },
  test: {
    backgroundColor: 'blue',
    width: '50%',
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
