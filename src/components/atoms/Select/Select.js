import React from 'react';
import PropTypes from 'prop-types';
import { SelectInput, Wrapper, StyledLabel } from './Select.style';

const Select = ({
  optionsValue,
  value,
  onChange,
  label,
  id,
  inputRef,
  name,
  ...rest
}) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <SelectInput
        options={optionsValue}
        classNamePrefix="Select"
        placeholder="wybierz..."
        id={id}
        name={name}
        value={optionsValue.find((val) => val.value === value)}
        onChange={(val) => onChange(val.value)}
        {...rest}
        inputRef={inputRef}
      />
    </Wrapper>
  );
};
Select.propTypes = {
  optionsValue: PropTypes.array,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
