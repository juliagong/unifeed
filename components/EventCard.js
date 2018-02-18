import React from 'react';
import { Text,
         View,
         ScrollView,
         StyleSheet,
         Dimensions } from 'react-native';
import { Card, Tile, Button, ButtonGroup } from 'react-native-elements'
import Expo from 'expo';

export class EventCard extends React.Component {
  render() {
    return (
      <Card title={this.props.title}
            titleStyle={styles.title}
            style={styles.card} >
        <View style={styles.info}>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.location}>{this.props.loc}</Text>
          </View>
          <View style={{ alignItems: 'flex-end'}}>
            <Text style={styles.author}>{"@" + this.props.time}</Text>
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
        <ScrollView style={styles.description}>
          <Text style={styles.descriptionText}>{"Descpitions!"}</Text>
        </ScrollView>
        <View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#303036'
  },
  description: {
    height: 150,
  },
  descriptionText: {
    color: 'black'
  },
  title: {
    textAlign: "left",
    color: 'black'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  location: {
    textAlign: 'left',
    color: 'black'
  },
  author: {
    textAlign: 'right',
    color: 'black'
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
    borderRadius: 20
  },
  button2: {
    height: 30,
    width: 90,
    backgroundColor: '#99cc00',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 20
  },
  button3: {
    height: 30,
    width: 90,
    backgroundColor: '#ff9999',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 20
  },
});
