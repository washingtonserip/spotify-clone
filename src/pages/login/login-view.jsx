import React from 'react';
import PropTypes from 'prop-types';
import LogoSvg from '../../images/logo.svg';
import {
  Wrapper,
  Box,
  Logo,
  Text,
  Button,
} from './login-styles';

function LoginView({ redirectToSpotify }) {
  return (
    <Wrapper>
      <Box>
        <Logo src={LogoSvg} />

        <Text>Pesquise, favorite e ouça!</Text>

        <Button onClick={redirectToSpotify}>
          Conecte-se via Spotify
        </Button>
      </Box>
    </Wrapper>
  );
}

LoginView.propTypes = {
  redirectToSpotify: PropTypes.func.isRequired,
};

export default LoginView;
