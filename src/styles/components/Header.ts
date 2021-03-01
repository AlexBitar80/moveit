import styled from 'styled-components';
import Switch from 'react-switch';

export const Container = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  bottom: 100%;
  flex-direction: row;
  justify-content: space-between;
  width: 6.5rem;
  top: 30px;
`;

export const SwitchTheme = styled(Switch)`
  margin-right: 1.25rem;
`;
