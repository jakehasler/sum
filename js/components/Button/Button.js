import React, { Component } from 'react';
import { oneOf, node } from 'prop-types';
import { Wrapper, Value } from './styles';

export default class Button extends Component {
  static propTypes = {
    size: oneOf(['sm', 'md', 'lg']),
    shape: oneOf(['round', 'square']),
    children: node
  }
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Value>{children}</Value>
      </Wrapper>
    );
  }
}
