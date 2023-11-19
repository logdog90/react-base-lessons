import './App.css';

const WhoAmI = ({ name, surname, profile }) => {
  return (
    <div>
      <h2>Меня зовут {name()} {surname}</h2>
      <a href={profile} target="blank">Профиль</a>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <WhoAmI name={() => { return 'Евгений' }} surname="Башлак" profile="https://vk.com/logdogkrzn" />
      <WhoAmI name={() => { return 'Максим' }} surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" />
    </div>
  );
}

export default App;
