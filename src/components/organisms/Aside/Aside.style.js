import styled from 'styled-components';
import {motion} from 'framer-motion'

export const AsideWrapper = styled.aside`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: block;
    padding: 0 15px;
    grid-row: 1 / 3;
    grid-column: 3;
    background-color: ${({ theme }) => theme.colors.mainBGCLight};
    width: 100%;
    height: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
    display: flex;
    flex-direction: column;
  }
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 20px;

  svg {
    width: 16px;
    margin-right: 10px;
    path {
      stroke: none;
      fill: ${({ theme }) => theme.colors.secondColor};
    }
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 500;
    line-height: 25px;
  }
`;

export const Header = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const MealsWrapper = styled(motion.div)`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`