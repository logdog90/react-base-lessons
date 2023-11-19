### Создание нового проекта
В этом уроке я разделил структуру приложение на отдельные компоненты. Каждый из компонентов лежат в своих папках.
Пример, файл app-info/app-info.js
```
import './app-info.css';

const AppInfo = () => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Альбатрос</h1>
      <h2>Общее число сотрудников:</h2>
      <h2>Премию получат:</h2>
    </div>
  );
};

export default AppInfo;
```
Данный компонент импортировал в app/app.js
```
import AppInfo from '../app-info/app-info';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <AppInfo />
    </div>
  );
};

export default App;
```

Сам app/app.js импортировал в основной файл index.js
```
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
Всё тоже самое, проделал с остальными компонентами приложения.