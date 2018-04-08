import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const DisplayHolder = styled.View`
  height: 100;
  background-color: ${colors.lightGray};
  border-radius: 4;
  justify-content: center;
  align-items: flex-end;
  padding: 8px;
  margin-bottom: 8px;
`;

export const Number = styled.Text`
  font-weight: bold;
  font-size: 64;
`;

export const Fraction = styled.Text`
  font-size: 28;
`;
