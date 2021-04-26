import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight,
  Image, 
  SafeAreaView, 
  Button
} from 'react-native';

export default function App() {
  console.log("HELLOOO");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={() => console.log("Pressed")}>
        <Image fadeDuration={500} source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <Button color="red" title="bruh" onPress={()=> console.log("button pressed")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
