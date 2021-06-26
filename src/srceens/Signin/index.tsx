import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Image, Content, Title, SubTitle} from './styles';

import Illustration from '../../assets/ilustracao.png';
import ButtonIcons from '../../components/ButtonIcons';

const Signin: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={Illustration} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {'\n'} e organize suas {'\n'}jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{'\n'} favoritos com seus amigos
        </SubTitle>
        <ButtonIcons title="Entrar com o discord" activeOpacity={0.5} />
      </Content>
    </Container>
  );
};

export default Signin;
