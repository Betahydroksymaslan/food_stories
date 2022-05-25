import React from 'react';
import { CloseIcon } from './Close.style';

interface CloseProps {
  closePosition: string;
}

const Close = ({ closePosition = 'top-left', ...rest }: CloseProps) => {
  return <CloseIcon closePosition={closePosition} {...rest} />;
};

export default Close;
