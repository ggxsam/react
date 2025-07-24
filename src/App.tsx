import { ErrorBoundary } from 'react-error-boundary';
import UseCallback from './components/CallBackComponent';
import FallbackComponent from './components/FallBackComponent';
import GitHubProfile from './components/githubProfile';
import UseMemo from './components/MemoComponent';
import ThemeComponent from './components/ThemeComponent';
import { ThemeContextProvider } from './context/ThemeProvider';

const App = () => {
  return (
    <div>
      <ThemeContextProvider>

          {/* <UseMemo /> */}
        {/* <ThemeComponent /> */}
        <ErrorBoundary FallbackComponent={FallbackComponent} onReset={() => window.location.reload()}>
          {/* <UseCallback /> */}
        <GitHubProfile />
        </ErrorBoundary>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
