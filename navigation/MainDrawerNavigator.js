import React from 'react';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedScreen from '../screens/FeedScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import PinnedScreen from '../screens/PinnedScreen';

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Feed: {
      screen: FeedScreen,
    },
    MyEvents: {
      screen: MyEventsScreen,
    },
    PinnedScreen: {
      screen: PinnedScreen,
    }
  },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //
  //   }),
  //
  // }
);
