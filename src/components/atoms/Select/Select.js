import React from 'react';
import PropTypes from 'prop-types';
import { SelectInput, Wrapper, StyledLabel } from './Select.style';

const Select = ({
  isMulti = false,
  optionsValue,
  value,
  onChange,
  label,
  id,
  inputRef,
  name,
  inputSize,
  placeholder = 'wybierz...',
  ...rest
}) => {
  return (
    <Wrapper inputSize={inputSize}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <SelectInput
        options={optionsValue}
        classNamePrefix="Select"
        placeholder={placeholder}
        id={id}
        name={name}
        isMulti={isMulti}
        value={
          isMulti
            ? optionsValue.filter((item) => value?.includes(item.value))
            : optionsValue.find((val) => val.value === value)
        }
        onChange={
          isMulti
            ? (val) => onChange(val.map((item) => item.value))
            : (val) => onChange(val.value)
        }
        {...rest}
        inputRef={inputRef}
      />
    </Wrapper>
  );
};
Select.propTypes = {
  optionsValue: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Select;
