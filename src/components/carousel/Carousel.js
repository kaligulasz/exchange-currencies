import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CarouselSpring from 'react-spring-3d-carousel';
import { config } from 'react-spring';

// Components
import CarouselItem from './CarouselItem';
import CarouselNavigation from './CarouselNavigation';

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  position: relative;
`;

const CarouselContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const parseToSlides = items => items.reduce((prev, current) => ([
  ...prev,
  {
    key: current.id,
    content: <CarouselItem item={current} />,
  },
]), []);

const carouselConfig = {
  offsetRadius: 2,
  showNavigation: false,
  config: config.gentle,
};

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = parseToSlides(items);

  return (
    <Wrapper>
      <CarouselSpring
        slides={slides}
        goToSlide={currentSlide}
        offsetRadius={carouselConfig.offsetRadius}
        showNavigation={carouselConfig.showNavigation}
        animationConfig={carouselConfig.config}
      />
      <CarouselContainer />
      <CarouselNavigation
        currentSlide={currentSlide}
        handleSlideChange={setCurrentSlide}
      />
    </Wrapper>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carousel;
