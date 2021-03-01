import { shade } from 'polished';
import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.box};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }
  }

  > div span:first-child {
    border-right: 1px solid #f1f0f3;
  }

  > div span:last-child {
    border-left: 1px solid #f1f0f3;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({ theme }) => shade(0.25, theme.colors.blueTwitter)};

  color: ${({ theme }) => theme.colors.text};

  font-size: 1.25rem;
  font-weight: 600;

  svg {
    margin-left: 0.7rem;
    color: ${({ theme }) => theme.colors.text};
  }

  transition: background-color 0.3s;

  img {
    margin-left: 0.7rem;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.blueDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.blueDark};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primaryGreen};

    svg {
      margin-left: 0.7rem;
      color: ${({ theme }) => theme.colors.text};
    }

    &:disabled:hover {
      background: ${({ theme }) => shade(0.25, theme.colors.blueDark)};
    }
  }
`;

export const CountdownCancelButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.primaryRed};

  color: ${({ theme }) => theme.colors.text};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.3s;

  text-align: center;

  transition: background-color 0.3s;

  svg {
    margin-left: 0.7rem;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background: ${({ theme }) => shade(0.25, theme.colors.primaryRed)};
  }
`;
