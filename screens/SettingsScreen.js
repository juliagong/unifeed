import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions =({navigation})=> ({
        headerLeft:(
            <View style={{marginLeft:10}}>
             <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize:17}}>Menu</Text>
            </TouchableOpacity>
          </View>
        ),
        title: 'Settings',
        drawerLabel: 'Settings',
  });

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
