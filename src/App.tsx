import ThemeComponent from './components/ThemeComponent';
import { ThemeContextProvider } from './context/ThemeProvider';

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <ThemeComponent />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
