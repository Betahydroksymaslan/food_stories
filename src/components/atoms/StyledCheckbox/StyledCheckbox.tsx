import React, { forwardRef } from 'react';
import { Label, Checkbox } from './StyledCheckbox.style';

interface CheckboxType {
  label: string;
  id: string;
  value: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = forwardRef<HTMLInputElement,CheckboxType>(
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

export default StyledCheckbox;
