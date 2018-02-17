import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text, ScrollView } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

class MyFeed extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Feed',
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex : 1, paddingTop: '20%'}}>
          <Text style={{textAlign: 'center'}}>Welcome to unifeed!</Text>
        </View>

        <View style={{ flex : 1, paddingTop: '50%'}}>
          <Button
            onPress={() => this.props.navigation.navigate('EventsScreen')}
            title="Go to my events"
          />
        </View>
      </ScrollView>
    );
  }
}

/*_loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };*/

class MyEvents extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Events',
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex : 1, paddingTop: '20%'}}>
          <Text style={{textAlign: 'center'}}>The following are events you made:</Text>
        </View>

        <View style={{ flex : 1, paddingTop: '50%'}}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back to feed"
          />
        </View>
      </ScrollView>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  FeedScreen: {
    screen: MyFeed,
  },
  EventsScreen: {
    screen: MyEvents,
  },
});
