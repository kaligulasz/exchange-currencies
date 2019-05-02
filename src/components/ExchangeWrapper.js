import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  const handleOnExchange = () => {
    updateMainPocketAction(exchangePocket);
  };

  return (
    <Fragment>
      <BackgroundWrapper>
        <ExchangeItem
          pocket={changingFromPocket}
          onAmountChange={onAmountChange}
          primary
        />

        <ExchangeItem
          pocket={changingToPocket}
          secondary
        />
      </BackgroundWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleOnExchange}
          primary
        >
          EXCHANGE
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
