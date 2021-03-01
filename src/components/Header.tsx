import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Container, SwitchTheme } from '../styles/components/Header';
import { RiSunLine } from 'react-icons/ri';
import { BiMoon } from 'react-icons/bi';

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      {theme === 'light' ? <BiMoon size={20} /> : <RiSunLine size={20} />}

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
