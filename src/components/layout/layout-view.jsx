import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoSvg from '../../images/logo.svg';
import {
  Wrapper,
  Header,
  Logo,
  Content,
} from './layout-styles';

function LayoutView({ children }) {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <Logo
            src={LogoSvg}
            alt="Spotify"
          />
        </Link>
      </Header>

      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

LayoutView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutView;
