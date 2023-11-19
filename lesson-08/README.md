### Практика свойств на проекте
В данном уроке практиковался с реальным проектом. В файле App.js сэмулировал работу сервера. Якобы с сервера приходит массив с данными
```
const data = [
    { name: 'Башлак Евгений', salary: '100 000', increase: true },
    { name: 'Балтабаев Максим', salary: '60 000', increase: false },
    { name: 'Волковский Андрей', salary: '50 000', increase: false }
  ]
```
Данный массив был проброшен в компонент EmployeesList
```
<EmployeesList data={ data } />
```
В самом компоненте EmployeesList деструктурировал и перебрал массив. Массив был перебран методом map()
```
const EmployeesList = ({ data }) => {
  const employees = data.map(employee => {
    return (
      <EmployeesListItem name={ employee.name } salary={ employee.salary } />
    );
  });

  return (
    <ul className="app-list list-group">
      { employees }
    </ul>
  );
};
```
Перебранный массив можно также записать через спрэд оператор, таким образом
```
<EmployeesListItem { ...employee } />
```
В элементе EmployeesListItem также передал свойсва name, salary, increase и добавил класс increase к элементу list item
```
const EmployeesListItem = ({ name, salary, increase }) => {
  let addClass = 'list-group-item d-flex justify-content-between';

  if (increase) {
    addClass += ' increase'
  }

  return (
    <li className={addClass}>
      <span className="list-group-item-label">{ name }</span>
      <input type="text" className="list-group-item-input" defaultValue={ `${salary} ₽` } />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
```