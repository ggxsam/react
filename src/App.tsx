import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './components/FallBackComponent';
import { ThemeContextProvider } from './context/ThemeProvider';
import Form from './features/form/form';

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        {/* <Counter /> */}
        <Form />
        {/* <UseMemo /> */}
        {/* <ThemeComponent /> */}
        <ErrorBoundary FallbackComponent={FallbackComponent} onReset={() => window.location.reload()}>
          {/* <UseCallback /> */}
          {/* <GitHubProfile /> */}
        </ErrorBoundary>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
