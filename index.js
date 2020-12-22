const { startQuestions } = require("./queries.js");
const mysql = require("mysql2");
const cTable = require("console.table");
let departmentsArray = [];
let rolesArray = [];
let managerArray = [];
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your MySQL username
  user: "root",
  // Your MySQL password
  password: "Sharingan1!",
  database: "employee_trackerDB",
});

function startQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "starter",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all employees",
          "view all roles",
          "add new role",
          "add new employee",
          "update existing employee",
          "end session",
        ],
      },
    ])
    .then((answer) => {
      if (answer.starter === "view all departments") {
        viewDepartmentQuery();
      }

      if (answer.starter === "view all employees") {
        viewEmployeeQuery();
      }

      if (answer.starter === "view all roles") {
        viewRoleQuery();
      }

      if (answer.starter === "add new employee") {
        addEmployeeQuery();
      }

      if (answer.starter === "update existing employee") {
        updateEmployeeQuery();
      }

      if (answer.starter === "add new role") {
        addRoleQuery();
      }

      if (answer.starter === "end session") {
        connection.end();
      }
    });
  getDepartments();
  getRoles();
  getManagers();
}

const getRoles = () => {
  connection.query(`SELECT * FROM roles`, function (err, res) {
    if (err) throw err;
    rolesArray = [];
    for (i = 0; i < res.length; i++) {
      rolesArray.push(res[i].title);
    }
  });
};

const getDepartments = () => {
  connection.query(`SELECT * FROM departments`, function (err, res) {
    if (err) throw err;
    departmentsArray = [];
    for (i = 0; i < res.length; i++) {
      departmentsArray.push(res[i].name);
    }
  });
};

const getManagers = () => {
  connection.query(`SELECT * FROM managers`, function (err, res) {
    if (err) throw err;
    managerArray = [];
    for (i = 0; i < res.length; i++) {
      managerArray.push(res[i].name);
    }
  });
};

const viewDepartmentQuery = () => {
  connection.query(`SELECT * FROM departments`, function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  startQuestions();
};

const viewEmployeeQuery = () => {
  connection.query(
    `SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title AS current_role, r.salary, m.name AS manager FROM employees e 
    LEFT JOIN roles r ON e.role_id = r.id 
    LEFT JOIN departments d ON r.department_id = d.id 
    LEFT JOIN managers m ON e.manager_id = m.id 
    ORDER BY e.last_name`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  startQuestions();
};

const viewRoleQuery = () => {
  connection.query(
    `SELECT roles.title AS role_title, roles.id AS department_ID, departments.name AS department, roles.salary FROM roles 
    LEFT JOIN departments ON roles.department_id = departments.id 
    ORDER BY departments.name`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  startQuestions();
};

const addRoleQuery = () => {
  connection.query(`SELECT * FROM departments`, async function (err, res) {
    if (err) throw err;
    await inquirer
      .prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "enter role title",
        },
        {
          type: "input",
          name: "roleSalary",
          message: "input the salary for the role",
        },
        {
          type: "list",
          name: "roleDepartment",
          message: "choose a department for the role",
          choices: departmentsArray,
        },
      ])
      .then(function (inputs) {
        let depID;
        for (i = 0; i < res.length; i++) {
          if (res[i].title == inputs.roleTitle) {
            roleID == res[i].department_id;
          }
        }

        connection.query(
          `INSERT INTO roles SET ?`,
          {
            title: inputs.roleTitle,
            salary: inputs.roleSalary,
            department_id: depID,
          },
          function (err) {
            if (err) throw err;
          }
        );
      });
  });
  startQuestions();
};

const addEmployeeQuery = () => {
  console.log("adding new employee");
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeFirstName",
        message: "enter employee first name",
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "enter employee first name",
      },
      {
        type: "input",
        name: "employeeFirstName",
        message: "enter employee last name",
      },
    ])
    .then(function (inputs) {});
  connection.query("", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

const updateEmployeeQuery = () => {
  console.log("updating existing employee");
  connection.query("", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log("\n Employee Tracker \n");
  startQuestions();
});
