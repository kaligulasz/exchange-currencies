import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Reducers
import { getMainPocketCurrencyList } from '../reducers/mainPocketReducer';

// Components
import Select from './Select';

const SelectorsWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

const Typo = styled.p`
  margin-right: 0.5rem;
  
  ${({ marginLeft }) => marginLeft && `
    margin-left: 0.5rem;
  `}
`;

const CurrencySelectors = ({ currencyList, history, match }) => {
  const [selectedCurrency, setSelectedCurrency] = useState({
    changingFromCurrency: match.params.changingFromCurrency,
    changingToCurrency: match.params.changingToCurrency,
  });

  const { changingFromCurrency, changingToCurrency } = selectedCurrency;

  const handleOnSelectChange = (event) => {
    if (event.target.getAttribute('data-changing') === 'from') {
      setSelectedCurrency({
        ...selectedCurrency,
        changingFromCurrency: event.target.value,
      });
    } else {
      setSelectedCurrency({
        ...selectedCurrency,
        changingToCurrency: event.target.value,
      });
    }
  };

  useEffect(() => {
    history.push(`/exchange/${changingFromCurrency}/${changingToCurrency}`);
  }, [selectedCurrency]);

  return (
    <SelectorsWrapper>
      <Typo>from</Typo>
      <Select
        options={currencyList.filter(currency => currency !== changingToCurrency)}
        onChange={handleOnSelectChange}
        data-changing="from"
        selected={changingFromCurrency}
      />

      <Typo marginLeft>to</Typo>
      <Select
        options={currencyList.filter(currency => currency !== changingFromCurrency)}
        onChange={handleOnSelectChange}
        data-changing="to"
        selected={changingToCurrency}
      />
    </SelectorsWrapper>
  );
};

CurrencySelectors.propTypes = {
  currencyList: PropTypes.array.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

const mapStateToProps = state => ({
  currencyList: getMainPocketCurrencyList(state),
});

export default connect(
  mapStateToProps,
)(withRouter(CurrencySelectors));
