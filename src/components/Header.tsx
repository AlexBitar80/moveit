import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Container, SwitchTheme } from '../styles/components/Header';

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      <SwitchTheme
        checked={theme === 'light'}
        height={20}
        width={40}
        onChange={toggleTheme}
        onColor={'#50fa7b'}
        offColor={'#44475a'}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
      />
    </Container>
  );
}
