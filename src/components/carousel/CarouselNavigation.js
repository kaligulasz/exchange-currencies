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

const CarouselNavigation = ({ currentSlide, handleSlideChange }) => (
  <Wrapper>
    <Button onClick={() => handleSlideChange(currentSlide - 1)} type="button" />
    <Button onClick={() => handleSlideChange(currentSlide + 1)} type="button" />
  </Wrapper>
);

CarouselNavigation.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  handleSlideChange: PropTypes.func.isRequired,
};

export default CarouselNavigation;
