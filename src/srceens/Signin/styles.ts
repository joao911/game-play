import styled from 'styled-components/native';
import {rh} from '../../ultils/responsive';
import colors from '../../ultils/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${rh(360)}px;
`;

export const Content = styled.View`
  margin-top: -${rh(40)}px;
  /* padding: 0px ${rh(50)}px; */
`;

export const Title = styled.Text`
  color: ${colors.heading};
  text-align: center;
  font-size: ${rh(40)}px;
  margin-bottom: ${rh(16)}px;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  color: ${colors.heading};
  text-align: center;
  font-size: ${rh(15)}px;
  margin-bottom: ${rh(64)}px;
  font-weight: 500;
`;
