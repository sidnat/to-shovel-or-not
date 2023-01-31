import Index from './components/Index';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Index />
    </CookiesProvider>
  );
}

export default App;
