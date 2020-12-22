const connection = require("./connection");

const viewDepartmentQuery = () => {
  console.log("showing all departments");
  const query = connection.query(
    "SELECT * FROM departments",
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  console.table(query.sql);
};

const viewEmployeeQuery = () => {
  console.log("showing all employees");
  const query = connection.query(
    "SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title AS current_role, r.salary, m.name AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id LEFT JOIN managers m ON e.manager_id = m.id ORDER BY e.last_name;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  console.table(query.sql);
};

const viewRoleQuery = () => {
  console.log("showing all roles");
  const query = connection.query(
    "SELECT roles.title AS role_title, roles.id AS department_ID, departments.name AS department, roles.salary FROM roles LEFT JOIN departments ON roles.department_id = departments.id ORDER BY departments.name;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  console.table(query.sql);
};

const addRoleQuery = () => {
  console.log("adding new role");
  const query = connection.query("", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  console.table(query.sql);
};

const addEmployeeQuery = () => {
  console.log("adding new employee");
  const query = connection.query("", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  console.table(query.sql);
};

const updateEmployeeQuery = () => {
  console.log("updating existing employee");
  const query = connection.query("", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  console.table(query.sql);
};

module.exports = {
  viewDepartmentQuery,
  viewEmployeeQuery,
  viewRoleQuery,
  addEmployeeQuery,
  updateEmployeeQuery,
  addRoleQuery,
};
