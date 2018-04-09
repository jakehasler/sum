import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Wrapper = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 65px;
  border-radius: 32.5px;
  background-color: ${colors.midGray};
  padding: 8px;
  margin: 8px;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: ${colors.darkGray};
`
