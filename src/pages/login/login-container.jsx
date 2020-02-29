import React from 'react';
import LoginView from './login-view';

function LoginContainer() {
  const getSpotifyUrl = () => {
    const authorizationScopes = ['user-read-email'];
    const baseUrl = 'https://accounts.spotify.com/authorize';
    const clientId = `?client_id=${process.env.CLIENT_ID}`;
    const redirectUri = `&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}`;
    const scope = `&scope=${encodeURIComponent(authorizationScopes.join(' '))}`;
    const responseType = '&response_type=token';

    return `${baseUrl}${clientId}${redirectUri}${scope}${responseType}`;
  };

  const redirectToSpotify = () => {
    window.location.href = getSpotifyUrl();
  };

  return (
    <LoginView
      redirectToSpotify={redirectToSpotify}
    />
  );
}

export default LoginContainer;
