import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import Routes from '../routes';
import { Wrapper } from './app-styles';

const theme = {
  primaryColor: 'rgb(153, 153, 153)',
  secondaryColor: 'rgb(250, 250, 250)',
  greenColor: 'rgba(30, 215, 96, 1)',
  hoverColor: 'rgba(0, 0, 0, 0.5)',
  bgColor: 'rgb(29, 29, 29)',
};

function AppView() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Routes />
      </Wrapper>
    </ThemeProvider>
  );
}

export default AppView;
