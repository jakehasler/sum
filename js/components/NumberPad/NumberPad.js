import React, { Component } from 'react';
import { times, map } from 'lodash';

import { Wrapper } from './styles';

import Button from '../Button/Button';

export default class NumberPad extends Component {

  onPress = (value) => {
    this.props.accumulate('whole', value)
  }

  render() {
    return (
      <Wrapper>
        {map(times(9), (index) => (
          <Button
            onPress={this.onPress}
            key={index}
            value={index + 1}
            size="md"
          />
        ))}
        <Button
          onPress={this.onPress}
          key={0}
          value={0}
          size="md"
        />
      </Wrapper>
    )
  }
}
