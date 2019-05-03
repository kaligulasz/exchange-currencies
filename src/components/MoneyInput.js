import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: 0;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.1);
  height: 1rem;
  padding: 1rem;
  text-align: right;
  width: 50%;
  color: ${props => props.theme.color.white};
  position: relative;
`;

const MinusIcon = styled.div`
  width: 0.7rem;
  margin-right: 1rem;
  height: 3px;
  background: ${props => props.theme.color.white};
  border-radius: 0.07rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


const MoneyInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');

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
    ) {
      onChange(value);
      setInputValue(value);
    }
  };

  return (
    <Wrapper>
      {inputValue && <MinusIcon />}
      <Input onChange={checkValidation} type="text" value={inputValue} />
    </Wrapper>
  );
};

MoneyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MoneyInput;
