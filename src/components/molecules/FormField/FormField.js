import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import { Wrapper, StyledLabel } from './FormField.style';

const FormField = forwardRef(
  (
    { id, label, onChange, name, type = 'text', placeholder, value, ...rest },
    ref
  ) => {
    return (
      <Wrapper>
        <StyledLabel htmlFor={id} {...rest}>
          {label}
        </StyledLabel>
        <Input
          name={name}
          type={type}
          ref={ref}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
