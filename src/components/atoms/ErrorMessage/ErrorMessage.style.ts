import styled from 'styled-components';

export const StyledSpan = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.error};
  margin: 10px 0;
  text-align: center;

  ${({theme}) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 10px 0;
  }
`;
