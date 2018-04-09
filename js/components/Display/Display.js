import React, { Component } from 'react';
import { map } from 'lodash';
import { DisplayHolder, Number } from './styles';

export default class Display extends Component {
  render() {
    const { elements } = this.props;
    return (
      <DisplayHolder>
        {map(elements, (elem, index) => (
          <Number>{elem.whole}</Number>
        ))}
      </DisplayHolder>
    );
  }
}
