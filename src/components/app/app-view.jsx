import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import Routes from '../routes';
import { Wrapper } from './app-styles';
import theme from './app-theme';

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
