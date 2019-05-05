import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sync } from 'styled-icons/octicons/Sync';
import currencyJs from 'currency.js';
import ReactRouterPropTypes from 'react-router-prop-types';

// Actions
import { syncWithMainPocket, setCurrencyAmount } from '../actions/exchangePocketActions';
import { updateMainPocket } from '../actions/mainPocketActions';

// Reducers
import { getMainPocket, getMainPocketCurrencyList } from '../reducers/mainPocketReducer';
import { getExchangePocket } from '../reducers/exchangePocketReducer';
import { getCurrencyRates } from '../reducers/currencyRatesReducer';
import ExchangeItem from './ExchangeItem';

// Components
import Button from './Button';
import ExchangeNavigation from './ExchangeNavigation';

// Styled
const PrimaryWrapper = styled.section`
  height: ${props => props.theme.primaryHeight};
  min-height: ${props => props.theme.primaryMinHeight};
  
  @media (max-width: ${props => props.theme.mediaQuery.tablet}) and (orientation: landscape) {
    height: ${props => props.theme.mobileHeight};
  }
`;

const ItemsWrapper = styled.section`
  background: ${props => props.theme.color.primaryGradient};
  height: 73%;
`;

const SyncIcon = styled(Sync)`
  display: block;
  float: right;
  margin-left: 0.3rem;
`;

const Footer = styled.footer`
  text-align: center;
  background: linear-gradient(90deg, rgba(18,67,111,1) 0%, rgba(47,144,114,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

const ExchangeWrapper = ({
  mainPocket,
  match,
  history,
  syncWithMainPocketAction,
  exchangePocket,
  currencyRates,
  setCurrencyAmountAction,
  updateMainPocketAction,
  currencyList,
}) => {
  const { changingFromCurrency = 'usd' } = match.params;
  const { changingToCurrency = 'eur' } = match.params;

  useEffect(() => {
    syncWithMainPocketAction(mainPocket);
  }, []);

  const changingFromPocket = exchangePocket[changingFromCurrency];
  const changingToPocket = exchangePocket[changingToCurrency];

  const actualRate = () => (
    currencyRates[changingToCurrency].rate / currencyRates[changingFromCurrency].rate
  );

  const onAmountChange = (value) => {
    const amountInDollars = currencyJs(value) / currencyRates[changingFromCurrency].rate;
    const selectedCurrencyNewAmount = currencyJs(
      mainPocket[changingFromCurrency].amount - currencyJs(value),
    ).value;

    const targetCurrencyNewAmount = (
      currencyJs(amountInDollars) * currencyRates[changingToCurrency].rate
      + currencyJs(mainPocket[changingToCurrency].amount)
    ).value;

    setCurrencyAmountAction(changingFromCurrency, selectedCurrencyNewAmount);
    setCurrencyAmountAction(changingToCurrency, targetCurrencyNewAmount);
  };

  const handleOnExchange = () => {
    if (changingToPocket.amount !== mainPocket[changingToCurrency].amount) {
      updateMainPocketAction(exchangePocket);

      history.push('/');
    }
  };

  return (
    <PrimaryWrapper>
      <ExchangeNavigation currencyList={currencyList} />

      <ItemsWrapper>
        <ExchangeItem
          mainPocket={mainPocket}
          pocket={changingFromPocket}
          onAmountChange={onAmountChange}
          primary
        />

        <ExchangeItem
          mainPocket={mainPocket}
          pocket={changingToPocket}
          actualRate={actualRate()}
          changingFromCurrencySymbol={changingFromPocket.currencySymbol}
          secondary
        />
      </ItemsWrapper>

      <Footer>
        <Button
          onClick={handleOnExchange}
          primary
          uppercase
        >
          exchange
          <SyncIcon size="19" />
        </Button>
      </Footer>
    </PrimaryWrapper>
  );
};

ExchangeWrapper.propTypes = {
  mainPocket: PropTypes.object.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  syncWithMainPocketAction: PropTypes.func.isRequired,
  exchangePocket: PropTypes.object.isRequired,
  currencyRates: PropTypes.object.isRequired,
  setCurrencyAmountAction: PropTypes.func.isRequired,
  updateMainPocketAction: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  currencyList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
  exchangePocket: getExchangePocket(state),
  currencyRates: getCurrencyRates(state),
  currencyList: getMainPocketCurrencyList(state),
});

export default connect(
  mapStateToProps,
  {
    syncWithMainPocketAction: syncWithMainPocket,
    setCurrencyAmountAction: setCurrencyAmount,
    updateMainPocketAction: updateMainPocket,
  },
)(withRouter(ExchangeWrapper));
