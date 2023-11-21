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
  };
};

const App = () => {
  return (
    <div className="App">
      <WhoAmI name="Евгений" surname="Башлак" profile="https://vk.com/logdogkrzn" />
      <WhoAmI name="Максим" surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" />
    </div>
  );
};

export default App;
