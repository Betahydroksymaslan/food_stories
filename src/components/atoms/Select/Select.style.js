import styled from 'styled-components';
import Select from 'react-select';

export const SelectInput = styled(Select)`
  margin: 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  .Select__control {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.mainBGCLight};
    padding: 7px 0 5px 20px;
    box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    
  }
  .Select__value-container {
    padding: 0;
    margin: 0;
  }
  .Select__input {
    color: ${({ theme }) => theme.colors.mainDark};
    z-index: 1000;
  }
  .Select__menu {
    color: ${({ theme }) => theme.colors.mainDark};
    z-index: 999;
    
  }
  .Select__menu-list {
    color: ${({ theme }) => theme.colors.mainDark};
    z-index: 999;
    
  }
  .Select__option {
    z-index: 2;
  }
  .Select__placeholder {
    color: ${({ theme }) => theme.colors.inputBorder};
    font-weight: 400;
  }

  ${({theme}) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};

    .Select__control {
    padding: 2px 0 2px 20px;
  }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ inputSize }) => {
    if (inputSize === 'small') return '120px';
    if (inputSize === 'medium') return '150px';
    else return '100%';
  }};
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  margin: 10px 0;

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
