import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Button from './Button';
import ExchangeSelectors from './ExchangeSelectors';

const Background = styled.div`
  background: #464b51;
`;

const AppWrapper = styled.div`
  width: 70%;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 500px;
  justify-content: space-between;
`;

const ExchangeNavigation = ({ history }) => {
  const handleOnClick = () => {
    history.push('/');
  };

  return (
    <Background>
      <AppWrapper>
        <ExchangeSelectors />
        <Button onClick={handleOnClick} tertiary>back</Button>
      </AppWrapper>
    </Background>
  );
};

export default withRouter(ExchangeNavigation);
