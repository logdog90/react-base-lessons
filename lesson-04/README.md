### Строгий режим
Строгий режим или StrictMode - это инструмент для обнаружения потенциальных проблем в приложении. Строгий режим активирует дополнительные проверки и предупреждения для своих потомков.

В этом уроке я переписал index.js по стандарту React 18 и выше версии.
```
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```