import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmployeesList = ({ data }) => {
  const employees = data.map(employee => {
    return (
      // <EmployeesListItem name={ employee.name } salary={ employee.salary } />
      <EmployeesListItem { ...employee } />
    );
  });

  return (
    <ul className="app-list list-group">
      { employees }
    </ul>
  );
};

export default EmployeesList;