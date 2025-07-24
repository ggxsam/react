import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  //   console.log(toggleTheme());

  return (
    <div className='bg-background-color h-20px w-full'>
      <button onClick={toggleTheme}>button</button>
    </div>
  );
};

export default ThemeComponent;
