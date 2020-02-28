import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

const theme = {
  primaryColor: 'rgb(153, 153, 153)',
  secondaryColor: 'rgb(250, 250, 250)',
  hoverColor: 'rgba(0, 0, 0, 0.5)',
  bgColor: 'rgb(29, 29, 29)',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      App component
    </ThemeProvider>
  );
}

export default hot(App);
