import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Wrapper = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 75px;
  background-color: ${colors.midGray};
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: ${colors.darkGray};
`
