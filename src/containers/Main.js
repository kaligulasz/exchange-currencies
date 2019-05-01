import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  const handleOnClick = () => {
    history.push('exchange/usd');
  };

  return (
    <AppWrapper>
      <FlexContainer>
        <Carousel items={mainPocket} />
        <Button onClick={handleOnClick}>
          Ex
        </Button>
      </FlexContainer>
    </AppWrapper>
  );
};

Main.propTypes = {
  mainPocket: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
});

export default connect(mapStateToProps,
  {})(withRouter(Main));
