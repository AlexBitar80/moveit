import { SwitchTheme, SwitchContainer } from '../styles/components/Switch';
import { RiSunLine } from 'react-icons/ri';
import { ThemeContext } from '../context/ThemeContext';
import { BiMoon } from 'react-icons/bi';
import { useContext } from 'react';

export function Switch() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <SwitchContainer>
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
    </SwitchContainer>
  );
}
