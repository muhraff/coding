import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './Container.css';

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;
