import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
  Dimensions
} from 'react-native';
import StartupScreen from './app/screens/StartupScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  console.log("TESTING");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={StartupScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
  }
});
