import React from 'react';
import { View, Text, Button } from 'react-native';

//Calling a custom components
//import AlbumList from '../my_custom_components/Lists/AlbumList'
import ScreenStyles from './ViewStyles/ScreenStyles'


//The navigation statement ({navigation}) is how we add paramenters to our props. Usually parameters are other props, but can vary depending on you use-case(s).
const AlbumView = ({route, navigation}: {route: any, navigation: any}) =>{

    //This is how parameters (values) are passed and stored from one user interface to another user interface, when using react native navigation.
    const { name, album } = route.params;
    return(
        <View style={ScreenStyles.defaultviewcontainer}>
            {/* <AlbumList/> */}
            <Text> This artist is from the home page{JSON.stringify(name)}</Text>
            <Text> This album is from the home page{JSON.stringify(album)}</Text>
            {/* navigation.goBack() is an alternative to way to return to a previous 'screen' */}
            <Button title="Go Back To Home Page" onPress={() => navigation.navigate("Home View")}/>
        </View>
    );
    
}

export default AlbumView;
