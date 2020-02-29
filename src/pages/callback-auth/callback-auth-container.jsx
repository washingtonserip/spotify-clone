import React from 'react';
import { Redirect } from 'react-router-dom';

function AuthContainer() {
  const setAuthData = () => {
    const { hash } = window.location;

    if (hash) {
      hash.substring(1).split('&').forEach((kv) => {
        const [key, value] = kv.split('=');
        sessionStorage.setItem(key, value);
      });
    }
  };

  setAuthData();

  return (
    <Redirect to="/" />
  );
}

export default AuthContainer;
