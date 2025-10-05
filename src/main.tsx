import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: system-ui;">
      <h1>Загрузка...</h1>
      <p>Пожалуйста, обновите страницу</p>
      <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 20px; font-size: 16px;">
        Обновить
      </button>
    </div>
  `;
}