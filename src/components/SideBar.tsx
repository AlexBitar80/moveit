import { Container } from '../styles/components/SideBar';
import { FiHome } from 'react-icons/fi';
import { Switch } from './Switch';

export function SideBar() {
  return (
    <Container>
      <img src="/Logo.svg" alt="logo" />

      <nav>
        <FiHome size={28} />
      </nav>

      <Switch />
    </Container>
  );
}
