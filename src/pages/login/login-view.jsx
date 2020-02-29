import React from 'react';
import LogoSvg from '../../images/logo.svg';
import {
  Wrapper,
  Box,
  Logo,
  Text,
  Link,
} from './login-styles';

function LoginView() {
  return (
    <Wrapper>
      <Box>
        <Logo src={LogoSvg} />

        <Text>Pesquise, favorite e ouça!</Text>

        <Link href="/">
          Conecte-se via Spotify
        </Link>
      </Box>
    </Wrapper>
  );
}

export default LoginView;
