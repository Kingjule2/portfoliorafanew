import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import TechStack from './components/TechStack.jsx';
import PortfolioContinuation from './components/PortfolioContinuation.jsx';

createRoot(document.getElementById('tech-stack-root')).render(
  <StrictMode>
    <>
      <TechStack />
      <PortfolioContinuation />
    </>
  </StrictMode>,
);
