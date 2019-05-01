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

const parseToSlides = items => Object.keys(items).reduce((prev, current) => ([
  ...prev,
  {
    key: items[current].id,
    content: <CarouselItem item={items[current]} />,
  },
]), []);

const carouselConfig = {
  offsetRadius: 2,
  showNavigation: false,
  config: config.gentle,
};

const Carousel = ({ items, onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = parseToSlides(items);
  const itemsKeys = Object.keys(items);

  const handleSlideChange = (event) => {
    let slideNumber = 0;

    switch (event.target.getAttribute('data-direction')) {
      case 'next':
        slideNumber = currentSlide === (slides.length - 1) ? 0 : currentSlide + 1;
        break;

      case 'prev':
        slideNumber = currentSlide === 0 ? (itemsKeys.length - 1) : currentSlide - 1;
        break;

      default:
        slideNumber = 0;
        break;
    }

    setCurrentSlide(slideNumber);

    onSlideChange({
      changingFromCurrency: itemsKeys[slideNumber],
      changingToCurrency: (itemsKeys.length - 1) === slideNumber
        ? itemsKeys[0]
        : itemsKeys[slideNumber + 1],
    });
  };

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
        handleSlideChange={handleSlideChange}
      />
    </Wrapper>
  );
};

Carousel.propTypes = {
  items: PropTypes.object.isRequired,
  onSlideChange: PropTypes.func.isRequired,
};

export default Carousel;
