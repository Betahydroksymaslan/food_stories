import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${({ small }) => (small ? '100px' : '100%')};
  height: ${({ textareaSize, type }) => {
    if (textareaSize) return '120px';
    if (type === 'color') return '50px';
    return 'auto';
  }};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.mainBGCLight};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: ${({ rounded }) => (rounded ? '40px' : '10px')};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: ${({ isSearch, type }) => {
    if (isSearch) return '12px 10px 10px 60px';
    if (type === 'color') return '5px';
    return '12px 0 10px 20px';
  }};

  outline: none;
  resize: none;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.mainDark};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputBorder};
    font-weight: 400;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  width: 25px;
  position: absolute;
  display: grid;
  place-items: center;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  opacity: 0.6;
  svg {
    width: 100%;

    path {
      fill: ${({ theme }) => theme.colors.mainDark};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    svg {
      width: 100%;
    }
  }
`;
