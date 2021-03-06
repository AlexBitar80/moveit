import { shade } from 'polished';
import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;

  background: ${({ theme }) => theme.colors.box};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4rem;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};

      margin: 1.5rem 0.4rem;
    }

    p {
      line-height: 1.5;
    }

    footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border: 0;
        border-radius: 5px;

        color: ${({ theme }) => theme.colors.title};

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.3s;
      }

      button:hover {
        filter: brightness(0.9);
      }
    }

    @media (max-width: 644px) {
      margin: 30px 0 30px 0;
    }
  }
`;

export const ChallengeFailButton = styled.button`
  height: 42px;
  width: 90px;
  border: 0;
  border-radius: 5px;
  margin: 0px 8px 0px 0px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 1rem;
  font-weight: 600;

  background: ${({ theme }) => theme.colors.primaryRed};
  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => shade(0.25, theme.colors.primaryRed)};
  }
`;

export const ChallengeSucceededButton = styled.button`
  height: 42px;
  width: 90px;
  border: 0;
  border-radius: 5px;
  margin: 0px 0px 0px 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 1rem;
  font-weight: 600;

  background: ${({ theme }) => theme.colors.primaryGreen};

  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => shade(0.25, theme.colors.primaryGreen)};
  }
`;
