import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

type Props = {};

export default class MessagesScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>
          messages
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 100,
  },
  text: {
    textAlign: 'center',
  }
})
