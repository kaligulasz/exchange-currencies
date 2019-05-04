import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';

// Components
import Button from './Button';
import CurrencySelectors from './CurrencySelectors';

const Background = styled.div`
  background: ${props => props.theme.color.primary};
  height: 12%;
  display: flex;
`;

const AppWrapper = styled.div`
  width: ${props => props.theme.primaryWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.primaryMaxWidth};
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
