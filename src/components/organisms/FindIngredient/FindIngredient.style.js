import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 90vw;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;

  ${({theme}) => theme.media.desktop} {
    width: 350px;

  }
`;

export const InlineWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  &:last-of-type {
    margin-top: 20px;
  }
`;

export const ProductName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  img {
    width: 35px;
    height: 35px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  ${({theme}) => theme.media.desktop} {
    img {
      width: 30px;
    height: 30px;
    }
    span {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  }
`;

export const ProductQuant = styled(ProductName)`
  margin: 5px 0 20px;
`;

export const MacroBoxesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PlaceholderWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 30px 0 10px;
  
  svg {
    width: 70%;
  }
`