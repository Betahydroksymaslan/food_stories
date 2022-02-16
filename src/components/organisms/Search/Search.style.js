import styled from 'styled-components';


export const SearchWrapper = styled.div`
  width: 80%;
  margin-top: 10px;

  ${({ theme }) => theme.media.desktop} {
    margin-top: 30px;
    width: 40%;
    margin-left: 30px;
  }
`;

