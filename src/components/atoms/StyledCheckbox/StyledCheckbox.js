import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label, Checkbox } from './StyledCheckbox.style';

const StyledCheckbox = forwardRef(
  ({ label, id, value = false, onChange }, ref) => {
    return (
      <>
        <Label isChecked={value} htmlFor={id}>
          {label}
        </Label>
        <Checkbox
          checked={value}
          ref={ref}
          onChange={onChange}
          name={id}
          id={id}
        />
      </>
    );
  }
);

StyledCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChengae: PropTypes.func,
  id: PropTypes.string,
};

export default StyledCheckbox;
