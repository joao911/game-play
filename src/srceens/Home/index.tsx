import React from 'react';

import {Container, Header} from './styles';

import Profile from '../../components/Profile';
import Avatar from '../../components/Avatar';
const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Avatar urlImage="https://avatars.githubusercontent.com/u/49724031?v=4" />
        <Profile />
      </Header>
    </Container>
  );
};

export default Home;
