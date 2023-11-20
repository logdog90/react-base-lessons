import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmployeesList = ({ data }) => {
  const employees = data.map(employee => {
    const { id, ...itemEmployee } = employee

    return (
      <EmployeesListItem key={ id } {...itemEmployee } />
    );
  });

  return (
    <ul className="app-list list-group">
      { employees }
    </ul>
  );
};

export default EmployeesList;