import React from 'react';

import {Container, IconWrapper, Icon, Title} from './styles';
import DiscordImg from '../../assets/discord.png';

interface ButtonIconsProps {
  title: string;
  activeOpacity?: number;
}
const ButtonIcons: React.FC<ButtonIconsProps> = ({
  title,
  activeOpacity = 0.7,
}) => {
  return (
    <Container activeOpacity={activeOpacity}>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default ButtonIcons;
