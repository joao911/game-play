import styled from 'styled-components/native';
import {rh} from '../../ultils/responsive';
import colors from '../../ultils/styles/colors';

export const Container = styled.TouchableOpacity`
  height: ${rh(56)}px;
  background-color: ${colors.primary};
  border-radius: ${rh(8)}px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: ${rh(56)}px;
  height: ${rh(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: ${rh(1)}px;
  border-color: ${colors.line};
`;

export const Icon = styled.Image`
  width: ${rh(24)}px;
  height: ${rh(18)}px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${colors.heading};
  text-align: center;
`;
