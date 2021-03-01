import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.grandient.background};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.box};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(61, 24, 24, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.title};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
`;
