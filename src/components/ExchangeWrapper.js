import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import { syncWithMainPocket } from '../actions/exchangePocketActions';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import { getExchangePocket } from '../reducers/exchangePocketReducer';
import ExchangeItem from './ExchangeItem';

// Components
import AppWrapper from './AppWrapper';


const ExchangeWrapper = ({
  mainPocket, match, syncWithMainPocketAction, exchangePocket,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(match.params.currency);

  useEffect(() => {
    syncWithMainPocketAction(mainPocket);
  }, []);

  const secondaryPocket = exchangePocket.eur;
  const primaryPocket = exchangePocket[selectedCurrency];

  return (
    <AppWrapper>
      <ExchangeItem pocket={primaryPocket} primary />
      <ExchangeItem pocket={secondaryPocket} secondary />
    </AppWrapper>
  );
};

ExchangeWrapper.propTypes = {
  mainPocket: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  syncWithMainPocketAction: PropTypes.func.isRequired,
  exchangePocket: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
  exchangePocket: getExchangePocket(state),
});

export default connect(
  mapStateToProps,
  {
    syncWithMainPocketAction: syncWithMainPocket,
  },
)(withRouter(ExchangeWrapper));
