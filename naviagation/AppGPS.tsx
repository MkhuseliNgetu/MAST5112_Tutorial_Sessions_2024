import * as React from 'react';

//Calling a external dependency
//The following programming statements were adapted from React Native Dev:
//Link: https://reactnative.dev/docs/navigation
//Author: React Native
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Calling custom made user interfaces 'Screens'
import AlbumView from '../screens/AlbumView';
import HomeView from '../screens/HomeView';

//This is also calling a custom external dependency, however it is per the react-navigation guidelines.
//The following programming statement was adapted from React Native Dev:
//Link: https://reactnative.dev/docs/navigation
//Author: React Native
const Stack = createNativeStackNavigator();

//This is a prop. A Prop is similiar to a method, in the sense that it has an area for paramenters (), 
//braces to hold all of the programming statements {} and a return statement.
//The best perspective to use when think about a prop is an banking ATM. Banking ATM's have multiple features (e.g withdrawal, deposit), but are not representative of the entire bank.
const FirstAppRoute = () => {

  //Within a prop there is the body (the section where this is being typed in).
  //The body is where your 'Declarations' would be in your pseudocode.
  //However to ensure your 'Declarations' are usable in you practical code, they must be within the return statement of the prop.


  //The return statement of the prop is where you define what will actually be present on a user interface, when imported into the App.tsx
{/* The NavigationContainer allows us to use the react-navigation library within our application*/}
{/* //The following programming statements were adapted from React Native Dev:
        //Link: https://reactnative.dev/docs/navigation
        //Author: React Native */}
    return(
    <NavigationContainer>
        {/* The initialRouteName specifies from which 'screen' must the application start from */}
      <Stack.Navigator initialRouteName="Home View">
        {/* The Stack.Screen defines each outline of a user interface (basic screen without buttons & formatting) you are going to use in you application. */}
        <Stack.Screen name="Album View" component={AlbumView} options={{title: 'Album View'}}/>
        <Stack.Screen name="Home View" component={HomeView} options={{title: 'Home View'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
} 
//This programming statement communicates to the compiler of the application to compile the 'FirstAppRoute' prop, by default when running.
export default FirstAppRoute;