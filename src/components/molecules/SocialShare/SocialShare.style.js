import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.span`
    font-size: ${({theme}) =>theme.fontSize.s};
`
