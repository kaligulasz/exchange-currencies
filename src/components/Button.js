import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.button`
  border-radius: 50%;
  border: 1px solid ${props => props.theme.color.white};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background: none;
`;

const Button = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>{children}</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
