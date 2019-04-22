import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Button from '../components/Button';

// Reducers
import { getMainPocket } from '../reducers/mainPocketReducer';
import Carousel from '../components/carousel/Carousel';

const MainSection = styled.section`
  height: 40vh;
  background: #43cea2;
  background: -webkit-linear-gradient(to right, #185a9d, #43cea2);
  background: linear-gradient(to right, #185a9d, #43cea2);
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const handleOnClick = () => console.log('click');

const Main = ({ mainPocket }) => (
  <MainSection>
    <Wrapper>
      <Carousel items={mainPocket} />
      <Button onClick={handleOnClick}>
        Ex
      </Button>
    </Wrapper>
  </MainSection>
);

Main.propTypes = {
  mainPocket: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  mainPocket: getMainPocket(state),
});

export default connect(mapStateToProps,
  {},
)(Main);
