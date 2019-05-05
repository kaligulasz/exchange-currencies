import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: 0;
  background: none;
  height: 3rem;
  text-align: right;
  font-size: 2rem;
  color: ${props => props.theme.color.white};
  position: relative;
  outline: none;
  max-width: 10rem;
  
  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const MinusIcon = styled.div`
  width: 0.7rem;
  height: 3px;
  margin-right: -0.5rem;
  background: ${props => props.theme.color.white};
  border-radius: 0.07rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


const MoneyInput = ({ onChange, maxValue }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (maxValue < inputValue) {
      setInputValue('');
      onChange('');
    }
  }, [maxValue]);

  const validateDotDuplication = value => [...value].filter(char => char.includes('.')).length <= 1;

  const validateTwoDigitsAfterDot = (value) => {
    const { 1: afterDot = '' } = value.split('.');

    return afterDot.length < 3;
  };

  const checkValidation = (event) => {
    const { value } = event.target;
    const regex = /^[0-9.]+$/;

    if (
      (value === '' || regex.test(value))
      && validateDotDuplication(value)
      && validateTwoDigitsAfterDot(value)
      && maxValue >= value
    ) {
      onChange(value);
      setInputValue(value);
    }
  };

  return (
    <Wrapper>
      {inputValue && <MinusIcon />}
      <Input
        onChange={checkValidation}
        size={inputValue.length}
        type="text"
        value={inputValue}
        placeholder="amount"
        autofocus="true"
      />
    </Wrapper>
  );
};

MoneyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default MoneyInput;
