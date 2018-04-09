import React, { Component } from 'react';
import { oneOf, number } from 'prop-types';
import { Wrapper, Value } from './styles';

export default class Button extends Component {
  static propTypes = {
    size: oneOf(['sm', 'md', 'lg']),
    shape: oneOf(['round', 'square']),
    value: number
  }

  onPress = () => {
    this.props.onPress(this.props.value);
  }

  render() {
    const { value } = this.props;
    return (
      <Wrapper onPress={this.onPress}>
        <Value>{value}</Value>
      </Wrapper>
    );
  }
}
