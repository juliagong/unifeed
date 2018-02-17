import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Tile } from 'react-native-elements'

export class EventCard extends React.Component {

  render() {
    return (
      <Card title={this.props.title}>
        <ScrollView>
          <Text>{this.props.desc}</Text>
        </ScrollView>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    height: 10
  },
});
