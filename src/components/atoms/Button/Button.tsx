import { useState } from 'react';
import { StyledButton } from './Button.style';

interface ButtonProps {
  secondary?: boolean;
  wide: boolean;
  size: 's' | 'm' | 'l';
  children: string;
}

const Button = ({
  children,
  secondary = false,
  wide,
  size = 'm',
}: ButtonProps) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const changeAnimationState = () =>
    setStartAnimation((prevState) => !prevState);
  return (
    <StyledButton
      animationTriger={startAnimation}
      onClick={changeAnimationState}
      onAnimationEnd={changeAnimationState}
      secondary={secondary}
      wide={wide}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
