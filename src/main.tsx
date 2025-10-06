import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif; margin-top: 50px;"><h1 style="color: #6366f1;">Загрузка приложения...</h1><p>Секунду...</p></div>';
  
  setTimeout(function() {
    import('./App').then(function(module) {
      const App = module.default;
      try {
        const root = createRoot(rootElement);
        root.render(React.createElement(App));
      } catch (error) {
        console.error('Failed to render app:', error);
        rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif; color: red;"><h1>Ошибка загрузки</h1><p>' + String(error) + '</p><button onclick="location.reload()" style="padding: 10px 20px; margin-top: 20px;">Обновить</button></div>';
      }
    }).catch(function(error) {
      console.error('Failed to load app:', error);
      rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif; color: red;"><h1>Ошибка загрузки модуля</h1><p>' + String(error) + '</p><button onclick="location.reload()" style="padding: 10px 20px; margin-top: 20px;">Обновить</button></div>';
    });
  }, 100);
}