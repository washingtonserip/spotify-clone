import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Icon,
} from './back-button-styles';

function BackButtonView() {
  const history = useHistory();

  return (
    <Button onClick={history.goBack}>
      <Icon />
      Voltar
    </Button>
  );
}

export default BackButtonView;
