import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};

export default class ContactsScreen extends Component<Props> {
  static navigationOptions = {
    title: '通讯录',
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = `ios-people${focused ? '' : '-outline'}`;
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>
          contacts
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
