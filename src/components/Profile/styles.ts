import styled from 'styled-components/native';
import {rh} from '../../ultils/responsive';
import colors from '../../ultils/styles/colors';

export const Container = styled.View``;

export const User = styled.View`
  flex-direction: row;
`;

export const UserName = styled.Text`
  font-weight: 700;
  font-size: ${rh(24)}px;
  color: ${colors.heading};
  margin-right: ${rh(6)}px;
`;

export const Greeting = styled.Text`
  font-weight: 500;
  font-size: ${rh(24)}px;
  color: ${colors.heading};
`;

export const Message = styled.Text`
  font-weight: 400;
  color: ${colors.highlight};
`;
