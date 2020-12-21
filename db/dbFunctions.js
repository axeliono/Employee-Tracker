const inquirer = require("inquirer");
const { viewDepartmentQuery } = require("./queries");
const connection = require("./connection.js");
const questions = [
  {
    type: "list",
    name: "starter",
    message: "What would you like to do?",
    choices: ["view all departments"],
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
    });
  }
}

module.exports = employeeDatabase;
