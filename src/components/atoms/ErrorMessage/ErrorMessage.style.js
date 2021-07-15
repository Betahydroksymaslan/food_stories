import styled from 'styled-components';

export const StyledSpan = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.error};
  margin: 3px 0;
`;
