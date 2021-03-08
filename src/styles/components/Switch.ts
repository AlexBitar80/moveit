import styled from 'styled-components';
import Switch from 'react-switch';

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 32px 0;
  flex-direction: row;

  @media (max-width: 1170px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 28px 20px 32px 0;
    flex-direction: row;
  }
`;

export const SwitchTheme = styled(Switch)`
  margin-left: 8px;
`;
