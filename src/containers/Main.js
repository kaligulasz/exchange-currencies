import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Button from '../components/Button';
import AppWrapper from '../components/AppWrapper';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import Carousel from '../components/carousel/Carousel';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = ({ mainPocket, history }) => {
  const [selectedCurrency, setSelectedCurrency] = useState({
    changingFromCurrency: 'usd',
    changingToCurrency: 'eur',
  });

  const handleOnClick = () => {
    history.push(`exchange/${selectedCurrency.changingFromCurrency}/${selectedCurrency.changingToCurrency}`);
  };

  return (
    <AppWrapper>
      <FlexContainer>
        <Carousel items={mainPocket} onSlideChange={setSelectedCurrency} />
        <Button onClick={handleOnClick} secondary>
          Ex
        </Button>
      </FlexContainer>
    </AppWrapper>
  );
};

Main.propTypes = {
  mainPocket: PropTypes.object.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
});

export default connect(mapStateToProps)(withRouter(Main));
