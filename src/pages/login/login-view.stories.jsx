import React from 'react';
import { action } from '@storybook/addon-actions';
import LoginView from './login-view';

export default {
  title: 'Pages/Login/View',
};

export const standard = () => (
  <LoginView
    redirectToSpotify={action('redirect-spotify')}
  />
);
