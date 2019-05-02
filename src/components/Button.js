import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.button`
  border: 1px solid ${props => props.theme.color.white};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  background: none;
  line-height: 1;
  
  ${({ primary }) => primary && `
    border-radius: 1rem;
    padding: 0.5rem 3rem;
    font-size: 1.2rem;
    font-weight: 300;
  `};
  
  ${({ secondary }) => secondary && `
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  `};
  
  ${({ tertiary }) => tertiary && `
    border-radius: 0.5rem;
    padding: 0.1rem 1rem;
    font-weight: 300;
  `};
  
  ${({ uppercase }) => uppercase && `
    text-transform: uppercase;
  `};
`;

const Button = ({ children, onClick, ...rest }) => (
  <ButtonContainer onClick={onClick} {...rest}>{children}</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
