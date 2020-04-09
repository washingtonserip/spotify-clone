import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from '../src/components/app/app-styles';
import theme from '../src/components/app/app-theme';

const StorybookWrapper = (storyFn) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <Wrapper>
        {storyFn()}
      </Wrapper>
    </MemoryRouter>
  </ThemeProvider>
);

addDecorator(StorybookWrapper);
