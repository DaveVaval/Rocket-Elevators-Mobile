import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  StyleSheet, 
  View, 
  Image, 
  ActivityIndicator
} from 'react-native';

import StartupScreen from './app/screens/StartupScreen';
import HomeScreen from './app/screens/HomeScreen';
import ElevatorStatusScreen from './app/screens/ElevatorStatusScreen';
import { AuthContext } from './app/components/context';

const Stack = createStackNavigator();


export default function App() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('loggedin');
    },
    logout: () => {
      setUserToken(null);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if(isLoading){
    return(
      <View style={[styles.loading, styles.loadingHori]}>
          <ActivityIndicator size='large' color='#0466c8'/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
          <Stack.Navigator>
            <Stack.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
              title: <Image style={{ width: 100, height: 56}}
              source={require('./app/assets/REfavicon.png')}
              resizeMode='stretch'/>
            }}
            />
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
