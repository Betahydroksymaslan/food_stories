import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;

  svg {
    width: 50%;
    height: 50%;
    path,
    line {
      stroke: ${({ theme }) => theme.colors.mainDark};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    &:hover {
      cursor: pointer;
    }
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;
