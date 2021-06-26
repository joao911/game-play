import styled from 'styled-components/native';
import {rh, rw} from '../../ultils/responsive';
import colors from '../../ultils/styles/colors';

export const Container = styled.View`
  width: ${rw(50)}px;
  height: ${rh(50)}px;
  border-radius: ${rh(8)}px;
  align-items: center;
  justify-content: center;
  margin-right: ${rh(22)}px;
  background-color: ${colors.secondary70};
`;

export const Image = styled.Image`
  width: ${rh(45)}px;
  height: ${rw(45)}px;
  border-radius: ${rh(8)}px;
`;
