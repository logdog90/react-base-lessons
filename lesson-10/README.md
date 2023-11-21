### Состояния компонентов
В этом уроке я переделал функциональный подход в классовый
```
import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 33,
      textButton: '+1'
    };
  };

  nextYaer = () => {
    this.setState(state => ({
      years: state.years + 1
    }));
  };

  render() {
    const { name, surname, profile } = this.props;

    return (
      <div>
        <h2>Меня зовут { name } { surname }, мне {this.state.years}</h2>
        <a href={profile} target="blank">Профиль</a><br />
        <button 
          className='btn btn-success'
          onClick={this.nextYaer}
        >
          {this.state.textButton}
        </button>
      </div>
    );
  }
}
```
В экземпляр класса я передал метод `constructor(props)`, в нем метод `super(props)`.
Если по-мимо метода `super(props)` в методе `constructor(props)` ничего нет, то метод `constructor(props)` не пишется!
```
class WhoAmI extends Component {
  render() {
    const { name, surname, profile, years } = this.props;

    return (
      <div>
        <h2>Меня зовут { name } { surname }, мне {years}</h2>
        <a href={profile} target="blank">Профиль</a><br />
        <button className='btn btn-success'>+1</button>
      </div>
    );
  };
};

const App = () => {
  return (
    <div className="App">
      <WhoAmI name="Евгений" surname="Башлак" profile="https://vk.com/logdogkrzn" years="33" />
      <WhoAmI name="Максим" surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" years="33" />
    </div>
  );
};
```
Мы не можем менять состояния напрямую, это ошибка!
```
nextYaer = () => {
  this.state.years++
};
```
Для этого существует метод `setState()`. Если новое состояние зависит от старого, то в метод `setState()` передаётся CallBack
```
nextYaer = () => {
  this.setState(state => ({
    years: state.years + 1
  }));
};
```
Если же, новое состояние не зависит от старого, то в метод `setState()` возвращаем объект
```
nextYaer = () => {
  this.setState(({
    years: state.years + 1
  }));
};
```
В данном случае, новое состояние зависит от старого!
