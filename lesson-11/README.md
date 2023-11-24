### Самостоятельное задание на работу с состояниями
Файл App.js у меня выглядит таким образом
```
import{ Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter
    };
  }

  increaseByOne = () => {
    if (this.state.count < 3) {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    }
  }

  decreaseByOne = () => {
    if (this.state.count > -3) {
      this.setState(({ count }) => ({
        count: count - 1
      }));
    }
  }

  showRandomValue = () => {
    this.setState({
      count: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  } 

  resetCounter = () => {
    this.setState(() => ({
      count: this.props.counter
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <div className="counter">{ count }</div>
        <div className="controls">
          <button onClick={ this.increaseByOne }>INC</button>
          <button onClick={ this.decreaseByOne }>DEC</button>
          <button onClick={ this.showRandomValue }>RND</button>
          <button onClick={ this.resetCounter }>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
```