import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Plus } from 'styled-icons/typicons/Plus';
import currencyJs from 'currency.js';

// Components
import MoneyInput from './MoneyInput';

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
`;

const Wrapper = styled.section`
  box-sizing: border-box;
  height: 50%;
  ${({ secondary }) => secondary && `
    background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 90%);
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.primaryWidth};
  max-width: ${props => props.theme.primaryMaxWidth};
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
  
  ${({ textAlignRight }) => textAlignRight && `
    text-align: right;
  `};
`;

const ResultWrapper = styled.div`
  min-width: 6rem;
`;


const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ExchangeItem = ({
  pocket,
  primary,
  secondary,
  onAmountChange,
  mainPocket,
  actualRate,
  changingFromCurrencySymbol,
}) => {
  const { currency, currencySymbol, amount } = pocket;
  const mainPocketAmount = currencyJs(mainPocket[currency].amount);
  const summaryAmount = (currencyJs(amount) - mainPocketAmount).value;

  return (
    <Wrapper secondary={secondary}>
      <Container>
        <Item>
          <Title>{currency}</Title>
          <Description>
            {`You have ${currencySymbol}${mainPocketAmount.value}`}
          </Description>
        </Item>

        {primary
          ? (
            <Item>
              <MoneyInput onChange={onAmountChange} maxValue={mainPocketAmount.value} />
            </Item>
          ) : (
            <ResultWrapper>
              <Result>
                <Fragment>
                  <Plus size="20" />
                  <Title>
                    {summaryAmount}
                  </Title>
                </Fragment>
              </Result>
              <Description textAlignRight>
                {`${changingFromCurrencySymbol}1 = ${currencySymbol} ${currencyJs(actualRate)}`}
              </Description>
            </ResultWrapper>
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
  actualRate: null,
  changingFromCurrencySymbol: '',
};

ExchangeItem.propTypes = {
  pocket: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onAmountChange: PropTypes.func,
  mainPocket: PropTypes.object.isRequired,
  actualRate: PropTypes.number,
  changingFromCurrencySymbol: PropTypes.string,
};

export default ExchangeItem;
