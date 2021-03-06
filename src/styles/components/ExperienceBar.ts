import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px 0 0 0;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primaryGreen};
  }

  @media (max-width: 644px) {
    margin: 40px 0 40px 0;
  }
`;
