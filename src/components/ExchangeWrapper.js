import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sync } from 'styled-icons/octicons/Sync';
import currencyJs from 'currency.js';

// Actions
import { syncWithMainPocket, setCurrencyAmount } from '../actions/exchangePocketActions';
import { updateMainPocket } from '../actions/mainPocketActions';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import { getExchangePocket } from '../reducers/exchangePocketReducer';
import { getCurrencyRates } from '../reducers/currencyRatesReducer';
import ExchangeItem from './ExchangeItem';

// Components
import Button from './Button';

const BackgroundWrapper = styled.div`
  background: ${props => props.theme.color.primaryGradient};
  height: 40vh;
`;

const StyledSync = styled(Sync)`
  display: block;
  float: right;
  margin-left: 0.3rem;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  background: linear-gradient(90deg, rgba(18,67,111,1) 0%, rgba(47,144,114,1) 100%);
  padding: 1rem;
`;

const ExchangeWrapper = ({
  mainPocket,
  match,
  syncWithMainPocketAction,
  exchangePocket,
  currencyRates,
  setCurrencyAmountAction,
  updateMainPocketAction,
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
    updateMainPocketAction(exchangePocket);
  };

  return (
    <Fragment>
      <BackgroundWrapper>
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
      </BackgroundWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleOnExchange}
          primary
          uppercase
        >
          exchange
          <StyledSync size="19" />
        </Button>
      </ButtonWrapper>
    </Fragment>
  );
};

ExchangeWrapper.propTypes = {
  mainPocket: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  syncWithMainPocketAction: PropTypes.func.isRequired,
  exchangePocket: PropTypes.object.isRequired,
  currencyRates: PropTypes.object.isRequired,
  setCurrencyAmountAction: PropTypes.func.isRequired,
  updateMainPocketAction: PropTypes.func.isRequired,
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
    updateMainPocketAction: updateMainPocket,
  },
)(withRouter(ExchangeWrapper));
