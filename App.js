import React, { Component } from 'react';
import { View } from 'react-native';

import Sum from './js/Sum';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 20 }}>
        <Sum />
      </View>
    );
  }
}

