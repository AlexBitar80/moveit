import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  top: 0;
  width: 7rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors.box};

  @media (max-width: 1170px) {
    right: 0;
    width: 100%;
    height: 4rem;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.box};
  }

  img {
    margin: 2rem;

    @media (max-width: 1170px) {
      margin: 1rem;
      width: 38px;
      height: 32px;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      margin-bottom: 64px;
    }
  }
`;
