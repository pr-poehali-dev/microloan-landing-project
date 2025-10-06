import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error('Failed to render app:', error);
    if (rootElement) {
      rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif;"><h1>Загрузка...</h1><p>Пожалуйста, обновите страницу</p></div>';
    }
  }
}