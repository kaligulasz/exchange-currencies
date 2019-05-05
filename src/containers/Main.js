import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Sync } from 'styled-icons/octicons/Sync';

// Components
import Button from '../components/Button';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import Carousel from '../components/carousel/Carousel';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PrimaryWrapper = styled.section`
  background: ${props => props.theme.color.primaryGradient};
  height: ${props => props.theme.primaryHeight};
  overflow: hidden;
  
  @media (min-width: ${props => props.theme.mediaQuery.phoneBig}) and (orientation: landscape) {
    height: ${props => props.theme.mobileHeight};
  }
`;

const Main = ({ mainPocket, history }) => {
  const [selectedCurrency, setSelectedCurrency] = useState({
    changingFromCurrency: 'usd',
    changingToCurrency: 'eur',
  });

  const { changingFromCurrency, changingToCurrency } = selectedCurrency;

  const handleOnClick = () => {
    history.push(`exchange/${changingFromCurrency}/${changingToCurrency}`);
  };

  return (
    <PrimaryWrapper>
      <FlexContainer>
        <Carousel items={mainPocket} onSlideChange={setSelectedCurrency} />
        <Button onClick={handleOnClick} secondary>
          <Sync size="20" />
        </Button>
      </FlexContainer>
    </PrimaryWrapper>
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
