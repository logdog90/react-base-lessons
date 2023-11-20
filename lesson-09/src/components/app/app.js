import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () => {
  const data = [
    { id: 1, name: 'Башлак Евгений', salary: '100 000', increase: true },
    { id: 2, name: 'Балтабаев Максим', salary: '60 000', increase: false },
    { id: 3, name: 'Волковский Андрей', salary: '50 000', increase: false }
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={ data } />
      <EmployeesAddForm />
    </div>
  );
};

export default App;