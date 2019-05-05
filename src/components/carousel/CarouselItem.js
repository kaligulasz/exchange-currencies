import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 8rem;
  font-size: 1.2rem;
`;

const Title = styled.h4`
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  white-space: nowrap;
`;

const CurrencySymbol = styled.span`
  font-size: 1.5rem;
`;

const CarouselItem = ({ item }) => (
  <ItemWrapper>
    <Title>
      <CurrencySymbol>{item.currencySymbol}</CurrencySymbol>
      {item.amount}
    </Title>
    <Description>{item.description}</Description>
  </ItemWrapper>
);

CarouselItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CarouselItem;
