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
import { FirebaseHelper} from '../firebase_config/FirebaseHelper';

import { MonoText } from '../components/StyledText';
import { EventCard } from '../components/EventCard.js';

let EVENTS = {};//[
  // {
  //   title: "Hall Meeting",
  //   desc: "Let's talk and eat!",
  //   loc: "S2",
  //   time: "9:30pm",
  //   tags: ["S2","Food","Donuts"],
  // },
  // {
  //   title: "Frosofeast!",
  //   desc: "Julia is super awesome! Come eat her home-catered Chinese Meal!",
  //   loc: "Schiff Lounge",
  //   time:"5:30pm",
  //   tags: ["Food","Company"]
  // },
  // {
  //   title: "Hall Meeting",
  //   desc: "Let's talk and eat!",
  //   loc: "S2",
  //   time:"9:30pm",
  //   tags: ["S2","Food","Donuts"]
  // },
  // {
  //   title: "FrosoDumplings",
  //   desc: "Happy Lunar New Year!",
  //   loc: "Adams Lounge",
  //   time:"10:30pm",
  //   tags: ["Food","Company","Dumplings"]
  // },
//];

export default class MyFeed extends React.Component {
  static navigationOptions =({navigation})=> ({
        headerLeft:(
            <View style={{marginLeft:10}}>
             <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize:17}}>Menu</Text>
            </TouchableOpacity>
          </View>
        ),
        title: 'My Feed',
        drawerLabel: 'My Feed',
  });

  componentWillMount = async () => {
    EVENTS = await FirebaseHelper.readData();
  }

  renderEvent(ev, index) {
    let {title, desc, loc, time, tags} = ev;

    return (
      <View key={index}>
        <EventCard
          title={title}
          desc={desc}
          loc={loc}
          time={time}
          tags={tags}
        />

      </View>
    );
  }

  renderEventList() {
    return _.map(EVENTS, (ev[0], index) => {
      return this.renderEvent(ev, index);
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#101010"}}>
        <View style={{ flex : 1, paddingTop: 20}}>
          <Text style={{textAlign: 'center', fontSize: 36,
              color: 'white', fontFamily: 'AvenirNext-Bold'}}>unifeed</Text>
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
