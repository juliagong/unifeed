import _ from 'lodash'; // allows for functional programming like things
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { EventCard } from '../components/EventCard.js';

const EVENTS = [
  {
    title: "Hall Meeting",
    desc: "Let's talk and eat!"
  },
  {
    title: "Frosofeast",
    desc: "Julia is super awesome! Come eat her home-catered Chinese Meal!"
  },
];

export default class MyFeed extends React.Component {
  static navigationOptions = {
    title: 'My Feed',
    drawerLabel: 'My Feed',
  };

  renderEvent(ev, index) {
    let {title, desc} = ev;

    return (
      <View key={index}>
        <EventCard
          title={title}
          description={desc}
        />

      </View>
    );
  }

  renderEventList() {
    return _.map(EVENTS, (ev, index) => {
      return this.renderEvent(ev, index);
    });

  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex : 1, paddingTop: '20%'}}>
          <Text style={{textAlign: 'center'}}>Welcome to unifeed!</Text>
        </View>

        <View style={{ flex : 1, paddingTop: '50%'}}>
          <Button
            onPress={() => this.props.navigation.navigate('MyEvents')}
            title="Go to my events"
          />

        </View>
        {this.renderEventList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
