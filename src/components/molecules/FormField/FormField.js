import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import { Wrapper, StyledLabel } from './FormField.style';

const FormField = forwardRef(
  (
    {
      id,
      label,
      onChange,
      step,
      textareaSize,
      name,
      type = 'text',
      defaultValue,
      placeholder,
      value,
      small = false,
      ...rest
    },
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
          step={step}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          small={small}
          textareaSize={textareaSize}
        />
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  step: PropTypes.string,
  textareaSize: PropTypes.bool,
};

export default FormField;
