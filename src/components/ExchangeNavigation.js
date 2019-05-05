import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

// Components
import Button from './Button';
import CurrencySelectors from './CurrencySelectors';

const Background = styled.header`
  background: ${props => props.theme.color.primary};
  height: 12%;
  display: flex;
`;

const AppWrapper = styled.div`
  width: ${props => props.theme.mobileWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.primaryMaxWidth};
  justify-content: space-between;
  
  @media (min-width: ${props => props.theme.mediaQuery.phoneBig}) {
    width: ${props => props.theme.primaryWidth};
  }
`;

const ExchangeNavigation = ({ history, currencyList }) => {
  const handleOnClick = () => {
    history.push('/');
  };

  return (
    <Background>
      <AppWrapper>
        <CurrencySelectors currencyList={currencyList} />
        <Button onClick={handleOnClick} tertiary uppercase>back</Button>
      </AppWrapper>
    </Background>
  );
};

ExchangeNavigation.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  currencyList: PropTypes.array.isRequired,
};

export default withRouter(ExchangeNavigation);
