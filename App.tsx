import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
//Calling a non-custom component. Non-custom components are usually internal components to react-native and have a specific structure when being called.
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

//Calling an custom made component.
import AppGPS from './naviagation/AppGPS';

export default function App() {
  return (
      <AppGPS/>
  );
}




//Installation command for react-native: 
// 1. npm install @react-navigation/native @react-navigation/native-stack
// 2. npx expo install react-native-screens react-native-safe-area-context

//Type npm install within the folder to all the required node_modules when running on other machines.