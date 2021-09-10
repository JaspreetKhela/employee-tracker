// Import the database connection
const db = require("./db/connection.js");

// Import Inquirer npm package
const inquirer = require("inquirer");

// Import the handler functions
const handlerFunctions = require("./lib/sqlHandlerFunctions.js");

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");
});




// Test constants
// const departmentName = "Test Department";
// const title = "Test Title";
// const salary = 100000.000;
// const departmentID = 2;
// const firstName = "Test First Name";
// const lastName = "Test Last Name";
// const roleID = 2;
// const managerID = 2;
// const employeeID = 3;

// Test handler functions
// handlerFunctions.viewAllDepartments();
// handlerFunctions.viewAllRoles();
// handlerFunctions.viewAllEmployees();
// handlerFunctions.addDepartment(departmentName);
// handlerFunctions.addRole(title, salary, departmentID);
// handlerFunctions.addEmployee(firstName, lastName, roleID, managerID);
// handlerFunctions.updateEmployeeRole(roleID, employeeID);
// handlerFunctions.updateManagerOfEmployee(managerID, employeeID);
// handlerFunctions.viewEmployeesOfManager(managerID);
// handlerFunctions.viewEmployeesInDepartment(departmentID);
// handlerFunctions.deleteDepartment(departmentID);
// handlerFunctions.deleteRole(roleID);
// handlerFunctions.deleteEmployee(employeeID);