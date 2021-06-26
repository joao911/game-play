import React from 'react';

import {Container, User, UserName, Greeting, Message} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <User>
        <UserName>Olá</UserName>
        <Greeting>João</Greeting>
      </User>
      <Message>Hoje é dia de vitória</Message>
    </Container>
  );
};

export default Profile;
