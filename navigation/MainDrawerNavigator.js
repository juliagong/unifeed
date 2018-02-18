import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View, ScrollView, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator, NavigationActions } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedScreen from '../screens/FeedScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import PinnedScreen from '../screens/PinnedScreen';

class SideMenu extends React.Component {
  state = {
    selectedIndex: null,
    // data: [
    //   {
    //     name: 'My Feed',
    //     children: [
    //       { name: 'bacon', onPress:() => this.navigateToScreen('Home') }
    //     ]
    //   },
    //   {
    //     name: 'My Feed',
    //     children: [
    //       { name: 'bacon', onPress:() => this.navigateToScreen('Home') }
    //     ]
    //   }
    // ]
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  // renderChildren = (children) =>  children.map(this.renderItem)
  //
  //
  // componentWillUpdate() {
  //   LayoutAnimation.easeInEaseOut()
  // }
  //
  // selectItem = (item) => {
  //
  // }
  //
  // renderItem = ({name, onPress, children, childrenVisible}, index) => (
  //   <View>
  //     <Text style={sideMenuStyles.navItemStyle} onPress={onPress || () => this.selectItem(name)}>
  //     {name}
  //     </Text>
  //     {this.renderChildren(children)}
  //   </View>
  // )

  render () {
    return (
      <View style={sideMenuStyles.container}>
        <ScrollView>
          <View>
            <Text style={sideMenuStyles.sectionHeadingStyle} onPress={this.navigateToScreen('Feed')}>
              My Feed
            </Text>
          </View>
          <View>
            <Text style={sideMenuStyles.sectionHeadingStyle} onPress={this.navigateToScreen('MyEvents')}>
            My Events
            </Text>
          </View>
          <View>
            <Text style={sideMenuStyles.sectionHeadingStyle} onPress={this.navigateToScreen('Home')}>
              My Groups
            </Text>
            <View style={sideMenuStyles.navSectionStyle}>
              <Text style={sideMenuStyles.navItemStyle} onPress={this.navigateToScreen('Feed')}>
                O-Tone
              </Text>
              <Text style={sideMenuStyles.navItemStyle} onPress={this.navigateToScreen('Feed')}>
                SSI
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const sideMenuStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#34373d',
  },
  navItemStyle: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    color: 'white',
  },
  navSectionStyle: {
    backgroundColor: '#202328',
  },
  sectionHeadingStyle: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#34373d',
    color: 'white',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#202328',
  },
});

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
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
  // {
  //   navigationOptions: ({ navigation }) => ({
  //
  //   }),
  //
  // }
);
