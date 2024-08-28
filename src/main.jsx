import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
