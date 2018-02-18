import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions =({navigation})=> ({
        headerLeft:(
            <View style={{marginLeft:10}}>
             <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize:17}}>Menu</Text>
            </TouchableOpacity>
          </View>
        ),
        title: 'Links',
        drawerLabel: 'Links',
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
