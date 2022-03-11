import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 12px;
  height: 34px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;

  svg,
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 1em;
    white-space: nowrap;
  }

  ${({ theme }) => theme.media.desktop} {
    border-radius: 12px;

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.07);
    }
  }
`;
