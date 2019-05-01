import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1;
  margin: 0;
`;

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 1rem;
  height: 50%;
  ${({ secondary }) => secondary && `
    background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 90%);
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
`;

const Description = styled.div`
  opacity: 0.7;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  border: 0;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.1);
  height: 3rem;
  width: 100%;
`;

const ExchangeItem = ({
  pocket,
  primary,
  secondary,
  onAmountChange,
}) => {
  const { currency, currencySymbol, amount } = pocket;

  return (
    <Wrapper secondary={secondary}>
      <Container>
        <Item>
          <Title>{currency}</Title>
          <Description>
            You have
            <span>{currencySymbol}</span>
            {amount}
          </Description>
        </Item>

        {primary
          ? (
            <Item>
              <Input type="number" onChange={onAmountChange} />
            </Item>
          ) : (
            <div>{amount}</div>
          )
        }
      </Container>
    </Wrapper>
  );
};

ExchangeItem.defaultProps = {
  primary: false,
  secondary: false,
  onAmountChange: null,
};

ExchangeItem.propTypes = {
  pocket: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onAmountChange: PropTypes.func,
};

export default ExchangeItem;
