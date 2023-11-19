import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Добро пожаловать';

const elem = (
  <div>
    <h2 className="text">Текст: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">Клик</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);
