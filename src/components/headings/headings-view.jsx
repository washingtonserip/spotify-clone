import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './headings-styles';

function HeadingsView({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}

HeadingsView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingsView;
