import React from 'react';
import { Text,
         View,
         ScrollView,
         StyleSheet,
         Dimensions } from 'react-native';
import { Card, Tile, Button, ButtonGroup, Divider } from 'react-native-elements'
import Expo from 'expo';

export class EventCard extends React.Component {
  render() {
    return (
      <Card title={this.props.title}
            titleStyle={styles.title}
            style={styles.card} >
            <View style={styles.info}>
              <View>
                <Text style={styles.location}>{this.props.loc}</Text>
              </View>
              <View>
                <Text style={styles.time}>{"@" + this.props.time}</Text>
              </View>
            </View>
        <View style={styles.buttons}>
          <Button
            title = "Pin"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button1}
          />
          <Button
            title = "Go"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button2}
          />
          <Button
            title = "Share"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button3}
            containerStyle={{marginVertical: 10}}
          />
        </View>
        <Divider style={styles.divider} />
        <ScrollView style={styles.description}>
          <Text style={styles.descriptionText}>{this.props.desc}</Text>
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <ScrollView horizontal={true} style={{marginRight: 20}}>
              <Button
                title="s2"
                titleStyle={styles.tagTitle}
                buttonStyle={styles.tagButton}
                containerStyle={styles.tagContainer}
              />
              <Button
                title="food"
                titleStyle={styles.tagTitle}
                buttonStyle={styles.tagButton}
                containerStyle={styles.tagContainer}
              />
              <Button
                title="donuts"
                titleStyle={styles.tagTitle}
                buttonStyle={styles.tagButton}
                containerStyle={styles.tagContainer}
              />
          </ScrollView>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.author}>"Stephone"</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    height: 150,
  },
  descriptionText: {
    color: 'white'
  },
  title: {
    textAlign: "left",
    color: 'white'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: -50,
  },
  location: {
    textAlign: 'left',
    color: 'white',
    height: 20
  },
  time: {
    textAlign: 'right',
    color: 'white',
    height: 20
  },
  divider: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'

  },
  button1: {
    height: 30,
    width: 90,
    backgroundColor: '#99ccff',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  button2: {
    height: 30,
    width: 90,
    backgroundColor: '#99cc00',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  button3: {
    height: 30,
    width: 90,
    backgroundColor: '#ff9999',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  tagTitle: {
    marginHorizontal: 5,
    color: 'red'
  },
  tagButton: {
    backgroundColor: '#909090',
    width: null,
    height: 20,
    borderRadius: 3,
    marginHorizontal: -10
  },
  tagContainer: {
    marginTop: 20
  },
  author: {
    color: 'white'
  }
});
