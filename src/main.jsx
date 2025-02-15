import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = createRoot(el);
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
