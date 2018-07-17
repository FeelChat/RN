import React, { Component } from 'react';
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';

import Messages from './screens/Messages';
import Contacts from './screens/Contacts';
import My from './screens/My';

const RootStack = createMaterialBottomTabNavigator({
  '信息': { screen: Messages },
  '联系人': { screen: Contacts },
  '我': { screen: My },
}, {
  shifting: true,
  initialRouteName: '信息',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
})

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    )
  };
}
