### Свойства компонентов
В этом уроке, я познакомился с передачей свойств в компоненты. Здесь я использовал обычную функцию, в аргумент передал объект props, который имеет три свойства name, surname, profile
```
function WhoAmI(props) {
  return (
    <div>
      <h2>Меня зовут {props.name} {props.surname}</h2>
      <a href={props.profile} target="blank">Профиль</a>
    </div>
  );
}
```
Вот собственно этот компонент, куда мы передаём эти свойства.
```
function App() {
  return (
    <div className="App">
      <WhoAmI name="Евгений" surname="Башлак" profile="https://vk.com/logdogkrzn" />
      <WhoAmI name="Максим" surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" />
    </div>
  );
}
```
Свойсва компонентов можно деструктурировать, для упрощения написания кода. 
В фигурных скобках из props вытаскиваем name, surname, profile.
Можно использовать стрелочную функцию. 
В сами компоненты можно передавать любые типы данных, например объект
```
const WhoAmI = ({ name, surname, profile }) => {
  return (
    <div>
      <h2>Меня зовут {name.firstname} {surname}</h2>
      <a href={profile} target="blank">Профиль</a>
    </div>
  );
}
```
передаём объект
```
const App = () => {
  return (
    <div className="App">
      <WhoAmI name={{firstname: 'Евгений'}} surname="Башлак" profile="https://vk.com/logdogkrzn" />
      <WhoAmI name={{firstname: 'Максим'}} surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" />
    </div>
  );
}
```
или функцию
```
const WhoAmI = ({ name, surname, profile }) => {
  return (
    <div>
      <h2>Меня зовут {name()} {surname}</h2>
      <a href={profile} target="blank">Профиль</a>
    </div>
  );
};
```
Здесь её вызываем
```
const App = () => {
  return (
    <div className="App">
      <WhoAmI name={() => { return 'Евгений' }} surname="Башлак" profile="https://vk.com/logdogkrzn" />
      <WhoAmI name={() => { return 'Максим' }} surname="Балтабаев" profile="https://vk.com/goooooooogle_biz" />
    </div>
  );
}
```
Свойства компонентов должны быть постоянными. Нельзя из менять!