import React from 'react';
import { StyledParagraph } from './Paragraph.style';

interface ParagraphTypes {
  children: string;
  isBold: boolean;
  customMargin: string;
  hoverEffect: boolean;
  alignText: string;
  size: 'small' | 'medium' | 'big',
}

const Paragraph = ({
  children,
  isBold,
  customMargin,
  hoverEffect,
  alignText,
  size = 'medium',
  ...rest
}: ParagraphTypes) => {
  return (
    <StyledParagraph
      isBold={isBold}
      customMargin={customMargin}
      size={size}
      hoverEffect={hoverEffect}
      alignText={alignText}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
};


export default Paragraph;
