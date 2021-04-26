import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
  // StatusBar
} from 'react-native';
import StartupScreen from './app/screens/StartupScreen';


export default function App() {
  console.log("TESTING");
  return <StartupScreen/>;
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
