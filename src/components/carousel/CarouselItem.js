import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 100px;
`;

const CarouselItem = ({ item }) => (
  <ItemWrapper>
    <div>
      <span>
        {item.currency}
      </span>
      {item.amount}
    </div>
    <div>{item.description}</div>
  </ItemWrapper>
);

CarouselItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CarouselItem;
