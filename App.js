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


export default function App() {
  console.log("TESTING");
  
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, styles.back]}>
      <StatusBar style='auto'/>
      <Text>Rocket Elevators</Text>
      <TouchableHighlight onPress={() => console.log("Pressed")}>
        <Image fadeDuration={500} source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <Button color="red" title="bruh" 
        onPress={()=> Alert.alert('Ouain tcé', 'genre', [
          {text: 'ABUNDA'},
          {text: 'LA'},
          {text: 'KAKA'}
        ])}/>

        <View style={{backgroundColor: '#fff', flex: 0.5}}></View>
    </SafeAreaView>
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
