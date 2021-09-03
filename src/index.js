import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { SearchProvider } from './components/use-contextStore';

ReactDOM.render(
  <SearchProvider>
    <App />
  </SearchProvider>,
  document.getElementById('root')
);
