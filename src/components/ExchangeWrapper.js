import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import { syncWithMainPocket, setCurrencyAmount } from '../actions/exchangePocketActions';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import { getExchangePocket } from '../reducers/exchangePocketReducer';
import { getCurrencyRates } from '../reducers/currencyRatesReducer';
import ExchangeItem from './ExchangeItem';

// Components
import AppWrapper from './AppWrapper';

const ExchangeWrapper = ({
  mainPocket,
  match,
  syncWithMainPocketAction,
  exchangePocket,
  currencyRates,
  setCurrencyAmountAction,
}) => {
  const { changingFromCurrency = 'usd' } = match.params;
  const { changingToCurrency = 'eur' } = match.params;

  useEffect(() => {
    syncWithMainPocketAction(mainPocket);
  }, []);

  const changingFromPocket = exchangePocket[changingFromCurrency];
  const changingToPocket = exchangePocket[changingToCurrency];

  const onAmountChange = (event) => {
    const { value } = event.target;
    const amountInDollars = value / currencyRates[changingFromCurrency].rate;
    const selectedCurrencyNewAmount = mainPocket[changingFromCurrency].amount - value;

    const targetCurrencyNewAmount = (
      amountInDollars * currencyRates[changingToCurrency].rate
      + mainPocket[changingToCurrency].amount
    );

    setCurrencyAmountAction(changingFromCurrency, selectedCurrencyNewAmount);
    setCurrencyAmountAction(changingToCurrency, targetCurrencyNewAmount);
  };

  return (
    <AppWrapper>
      <ExchangeItem
        pocket={changingFromPocket}
        onAmountChange={onAmountChange}
        primary
      />

      <ExchangeItem
        pocket={changingToPocket}
        secondary
      />
    </AppWrapper>
  );
};

ExchangeWrapper.propTypes = {
  mainPocket: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  syncWithMainPocketAction: PropTypes.func.isRequired,
  exchangePocket: PropTypes.object.isRequired,
  currencyRates: PropTypes.object.isRequired,
  setCurrencyAmountAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
  exchangePocket: getExchangePocket(state),
  currencyRates: getCurrencyRates(state),
});

export default connect(
  mapStateToProps,
  {
    syncWithMainPocketAction: syncWithMainPocket,
    setCurrencyAmountAction: setCurrencyAmount,
  },
)(withRouter(ExchangeWrapper));
