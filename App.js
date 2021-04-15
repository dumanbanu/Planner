import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAluQdAMT--lGmZPixU5JQrGvzlOGoJ9RA",
  authDomain: "friendsplanner.firebaseapp.com",
  databaseURL: "https://friendsplanner.firebaseio.com",
  projectId: "friendsplanner",
  storageBucket: "friendsplanner.appspot.com",
  messagingSenderId: "541886107298",
  appId: "1:541886107298:web:18834108e203dc28ebabeb"
};
firebase.initializeApp(firebaseConfig);


export default function App() {

  React.useEffect(() => {
//ilk açıldığında yapılması istenilenler buraya yazılır
}, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
