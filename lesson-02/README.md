### Работаем с JSX-препроцессором, ограничения в нем
В данном уроке в файле index.js использовал синтаксис React до 18 версии. Итоговый файл
```
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
```

Есть три варианта написания содержимого кода. Варинт первый, когда один элемент.
```
const elem = <h2>Добро пожаловать</h2>;
```
Вариант второй. Создание элемента.
```
const elem = React.createElement('h2', {className: 'greetings'}, 'Добро пожаловать');
```
Данный метод вернёт нам
```
const elem = {
  type: 'h2',
  props: {
    className: 'greetings',
    children: 'Добро пожаловать'
  }
}
```
Вариант третий, итоговый. Использование многострочной структуры, которая заключается в круглые скобки. Всё элементы обязательно должны быть заключены в корневой блок - родитель!
```
const elem = (
  <div>
    <h2 className="text">Текст: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">Клик</button>
  </div>
);
```