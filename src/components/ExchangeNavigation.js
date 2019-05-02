import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';

// Components
import Button from './Button';
import CurrencySelectors from './CurrencySelectors';

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
        <CurrencySelectors />
        <Button onClick={handleOnClick} tertiary uppercase>back</Button>
      </AppWrapper>
    </Background>
  );
};

ExchangeNavigation.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(ExchangeNavigation);
