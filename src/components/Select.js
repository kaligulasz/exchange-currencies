import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  display: block;
  font-weight: 300;
  line-height: 1;
  color: ${props => props.theme.color.white}; 
  padding: 0.1rem 1rem;
  text-transform: uppercase;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${props => props.theme.color.white};
  border-radius: 0.5rem;
  appearance: none;
  background: none;
  cursor: pointer;
`;

const Select = ({
  options,
  onChange,
  selected,
  ...rest
}) => (
  <StyledSelect onChange={onChange} {...rest}>
    {options.map(option => (
      <option key={option} {...(selected === option && { selected: 'selected' })}>{option}</option>
    ))}
  </StyledSelect>
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Select;
