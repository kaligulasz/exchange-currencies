import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  background: ${props => props.theme.color.primaryGradient};
  height: 40vh;
`;

const AppWrapper = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppWrapper;
