import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import Routes from '../routes';
import { Wrapper } from './app-styles';

const theme = {
  primaryColor: 'rgb(153, 153, 153)',
  secondaryColor: 'rgb(250, 250, 250)',
  greenColor: 'rgba(30, 215, 96, 1)',
  hoverColor: 'rgba(0, 0, 0, 0.5)',
  bgColor: 'rgb(29, 29, 29)',
};

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Wrapper>
  );
}

export default hot(App);
