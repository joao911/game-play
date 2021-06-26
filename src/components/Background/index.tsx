import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../ultils/styles/colors';

import {Container} from './styles';

interface BackgroundProps {
  children: ReactNode;
}
const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <Container>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.secondary80, colors.secondary100]}>
        {children}
      </LinearGradient>
    </Container>
  );
};

export default Background;
