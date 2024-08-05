import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

//Calling a custom components
import ScreenStyles from './ViewStyles/ScreenStyles'

//The navigation statement ({navigation}) is how we add paramenters to our props. Usually parameters are other props, but can vary depending on you use-case(s).
 {/*The following programming statements was adapted from React Navigation:
     //Link: https://reactnavigation.org/docs/params
     //Author: React Navigation */}
const HomeView = ({navigation}: {navigation: any}) =>{
 
  {/*The following programming statements was adapted from React Navigation:
     //Link: https://reactnavigation.org/docs/params
     //Author: React Navigation */}
   return (
        <View style={ScreenStyles.defaultviewcontainer}> 
          < StatusBar style="auto" />  
          <Button title="See All Albums" onPress={() => navigation.navigate("Album View",{name: "KW", album: "Kids See Ghost"})}/>
        </View>
       
      );
}


export default HomeView;
