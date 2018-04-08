import React, { Component } from 'react';
import { DisplayHolder, Number } from './styles';

export default class Display extends Component {
  render() {
    return (
      <DisplayHolder>
        <Number>74</Number>
      </DisplayHolder>
    );
  }
}
