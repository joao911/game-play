import styled from 'styled-components/native';
import {rh} from '../../ultils/responsive';
import colors from '../../ultils/styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.secondary100};
`;

export const Header = styled.View`
  padding: 0px ${rh(24)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rh(16)}px;
  margin-bottom: ${rh(42)}px;
`;
