import React, { Component } from 'react';
import { get, last } from 'lodash';
import { Text, View } from 'react-native';
import { Container } from './styles';

import Display from './components/Display/Display';
import Button from './components/Button/Button';
import NumberPad from './components/NumberPad/NumberPad';

const WHOLE = 'whole';
const NUMERATOR = 'numerator';
const DENOMINATOR = 'denominator';
const OPERATOR = 'operator';

/**
 * element = {
 *  whole: int,
 *  numerator: int,
 *  denominator: int,
 *  type: num|frac|operator
 * }
 *
 * element = {
 *  value: "*"|"/"|"+"|"-",
 *  type: "operator"
 * }
 *
 * If the last element is an operator, create a new element.
 * if the last element is a number, then update it with the value
 *
*/

const EMPTY_NUMBER_ELEMENT = {
  whole: 0,
  numerator: 0,
  denominator: 0,
  type: 'number'
}

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: []
    }
  }

  addElement = (elements, type, value) => {
    const el = EMPTY_NUMBER_ELEMENT;
    el[type] = value;

    elements.push(el);
    this.setState({ elements });
  }

  updateWhole = (elements, value) => {

  }

  updateNumerator = (elements, value) => {

  }

  updateDenominator = (elements, value) => {

  }

  accumulate = (type, value) => {
    const elements = [...this.state.elements];

    if (get(last(elements), 'type') !== OPERATOR && elements.length > 0) {
      if (type === WHOLE) this.updateWhole(elements, value);
      if (type === NUMERATOR) this.updateNumerator(elements, value);
      if (type === DENOMINATOR) this.updateDenominator(elements, value);
    } else this.addElement(elements, type, value);
  }

  render() {
    const { elements } = this.state;
    console.log('EL', elements);
    return (
      <Container>
        <Display
          elements={elements}
        />
        <View style={{ flex: 1 }}>
          <NumberPad
            accumulate={this.accumulate}
          />
        </View>
      </Container>
    )
  }
}
