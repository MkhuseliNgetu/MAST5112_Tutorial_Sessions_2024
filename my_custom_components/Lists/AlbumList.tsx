import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionList, Text }from 'react-native';


const AlbumList = () =>{

    const albumdata = [
      {name: 'KW',
       album: 'Yeezus',
      },
      {name: 'KW',
        album: 'The Life Of Pablo',
      },
      {name: 'KW',
        album: 'DONDA',
      },
    ]
  
    return (
       <View>
            <FlatList
             data={albumdata}
             renderItem={({ item }) => <Text>{item.album}</Text>}
            />
       </View>  
     );
  }

  export default AlbumList;