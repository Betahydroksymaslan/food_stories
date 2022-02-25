import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const RatingWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  color: ${({ isStarChecked }) =>
    isStarChecked ? '#fed420' : 'rgba(0, 0, 0, 0.3)'};

  ${({ theme }) => theme.media.desktop} {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Star = styled(FaStar)`
  font-size: 40px;
  padding: 0 5px;
`;

export const RateName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
