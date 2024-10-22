import { StrictMode } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // Don't use StrictMode here, it will make the logs more confusing
  //<StrictMode>
    <App />
  //</StrictMode>
)
