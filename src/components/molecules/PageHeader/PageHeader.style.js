import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  svg {
    width: 35px;
    height: 35px;
    margin-right: 20px;

    path {
      stroke-width: 15;
    }
  }
`;

export const StyledHeader = styled.header`
  margin: 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
