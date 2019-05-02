import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { requestUpdateCurrencyRates, cancelUpdateCurrencyRates } from '../actions/currencyRatesActions';

// Reducers
import { getStatus } from '../reducers/currencyRatesReducer';

// Components
import RequestLoader from '../components/RequestLoader';
import ExchangeWrapper from '../components/ExchangeWrapper';
import ExchangeNavigation from '../components/ExchangeNavigation';

const Exchange = ({
  cancelUpdateCurrencyRatesAction,
  requestUpdateCurrencyRatesAction,
  status,
}) => {
  useEffect(() => {
    requestUpdateCurrencyRatesAction();

    return function clear() {
      cancelUpdateCurrencyRatesAction();
    };
  }, []);

  return (
    <RequestLoader status={status}>
      <ExchangeNavigation />
      <ExchangeWrapper />
    </RequestLoader>
  );
};

Exchange.propTypes = {
  cancelUpdateCurrencyRatesAction: PropTypes.func.isRequired,
  requestUpdateCurrencyRatesAction: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

export default connect(
  mapStateToProps,
  {
    requestUpdateCurrencyRatesAction: requestUpdateCurrencyRates,
    cancelUpdateCurrencyRatesAction: cancelUpdateCurrencyRates,
  },
)(Exchange);
