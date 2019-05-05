import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const Button = styled.button`
  background: none;
  border: 0;
  outline: none;
  width: 20%;
  cursor: pointer;
`;

const CarouselNavigation = ({ handleSlideChange }) => (
  <Wrapper>
    <Button onClick={handleSlideChange} type="button" data-direction="prev" />
    <Button onClick={handleSlideChange} type="button" data-direction="next" />
  </Wrapper>
);

CarouselNavigation.propTypes = {
  handleSlideChange: PropTypes.func.isRequired,
};

export default CarouselNavigation;
