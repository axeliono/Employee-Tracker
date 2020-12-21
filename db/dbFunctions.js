const inquirer = require("inquirer");
const {
  viewDepartmentQuery,
  viewEmployeeQuery,
  viewRoleQuery,
  addEmployeeQuery,
  updateEmployeeQuery,
  addRoleQuery,
} = require("./queries");
const connection = require("./connection.js");
const questions = [
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
];

class employeeDatabase {
  startConnection() {
    connection.connect((err) => {
      if (err) throw err;
      console.log("connected as id " + connection.threadId + "\n");

      // Put function to start inquirer prompts
      this.startPrompt();
    });
  }

  async startPrompt() {
    await inquirer.prompt(questions).then((answer) => {
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
  }
}

module.exports = employeeDatabase;
