import styled from 'styled-components';

export const StyledMacroBox = styled.div`
  width: 28%;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: 15px;
  display: flex;
  background: ${({ indexNumber }) => {
    if (indexNumber === 0) return '#f3f7fa';
    if (indexNumber === 1) return '#f1fadd';
    if (indexNumber === 2) return '#fdf1e7';
    return '#ffffff';
  }};
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  ${({ theme }) => theme.media.desktop} {
    width: 25%;
    min-width: 90px;
    transform-origin: center;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
    }
  }
`;

export const MacroName = styled.span`
  font-size: 17px;
  font-weight: ${({ isBold }) => (isBold ? '500' : '300')};
`;
