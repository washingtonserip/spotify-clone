import React from 'react';
import PropTypes from 'prop-types';
import LogoSvg from '../../images/logo.svg';
import {
  Wrapper,
  Header,
  Logo,
  Content,
} from './layout-style';

function LayoutView({ children }) {
  return (
    <Wrapper>
      <Header>
        <Logo src={LogoSvg} />
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
