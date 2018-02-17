import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Tile } from 'react-native-elements'

export class EventCard extends React.Component {

  render() {
    return (
      <Card title={this.props.title}>
        <ScrollView>
          <Text>{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</Text>
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
