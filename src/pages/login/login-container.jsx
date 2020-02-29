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

  const openLoginPopup = () => {
    const { screen, open } = window;
    const url = getSpotifyUrl();
    const target = 'Spotify';
    const width = 450;
    const height = 730;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    const features = `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=${width},height=${height},top=${top},left=${left}`;

    open(url, target, features);
  };

  return (
    <LoginView
      openLoginPopup={openLoginPopup}
    />
  );
}

export default LoginContainer;
