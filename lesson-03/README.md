### Элементы и компоненты
Элемент - это то, из чего сделаны компонеты.
Компонент - это независимая часть (блок), которая может быть переиспользована в любой части приложения.

В этом уроке использовал однострочные элементы
```
const Header = () => {
  return <h2>Заголовок второго уровня</h2>
}
```
Когда у однострочных элементов много свойств, для чистоты кода можно использовать переносы.
```
const Field = () => {
  return <input 
            type="text" 
            placeholder={holder} 
            style={styleField} 
          />
}
```

Условия внутри элемента передаётся через тернарные операторы
```
const text = 'Log in'
const logged = true

return <button>{logged ? 'Enter' : text}</button>

```
Так делать нельзя!
```
const text = 'Log in'

return <button>
  {
    if (logged) {
      return 'Enter'
    } else {
      return text
    }
  }
  </button>
```

Также в уроке был использован классовый подход
```
import { Component } from 'react';

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };

    return <input
              type="text"
              placeholder={holder}
              style={styleField}
            />
  }
}
```