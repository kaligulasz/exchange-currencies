import React from 'react';
import styled from 'styled-components';
import { Spinner5 } from 'styled-icons/icomoon/Spinner5';

const Background = styled.div`
  background: ${props => props.theme.color.primaryGradient};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const StyledSpinner = styled(Spinner5)`
  width: 3.5rem;
  animation: spin 1.2s linear infinite;
  
  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

const Loader = () => (
  <Background>
    <StyledSpinner />
  </Background>
);

export default Loader;
