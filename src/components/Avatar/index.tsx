import React from 'react';

import {Container, Image} from './styles';

interface AvatarProps {
  urlImage: string;
}
const Avatar: React.FC<AvatarProps> = ({urlImage}) => {
  return (
    <Container>
      <Image source={{uri: urlImage}} />
    </Container>
  );
};

export default Avatar;
