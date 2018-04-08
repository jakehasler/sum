import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from './styles';

import Display from './components/Display/Display';
import Button from './components/Button/Button';

export default class Sum extends Component {
  render() {
    return (
      <Container>
        <Display />
        <View>
          <Button size="md" shape="round">1</Button>
        </View>
      </Container>
    )
  }
}
