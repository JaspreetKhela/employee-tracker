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

// Generate the arrays that contain all of the data from the respective personnel database tables
var departmentsArray = handlerFunctions.departmentsArrayGenerator();
var rolesArray = handlerFunctions.rolesArrayGenerator();
var employeesArray = handlerFunctions.employeesArrayGenerator();

// console.log("Arrays: ", departmentsArray, rolesArray, employeesArray);

// Main menu prompts
function mainMenuPrompts() {
    console.log(`
=========
Main Menu
=========
`);
    return inquirer
    .prompt([
        // Choose an action to perform on the database
        {
            type: "list",
            name: "mainMenuChoice",
            message: "Please choose an action to perform:",
            choices: ["View All Departments", 
                        "View All Roles", 
                        "View All Employees", 
                        "Add a Department", 
                        "Add a Role", 
                        "Add an Employee", 
                        "Update an Employee's Role", 
                        "Update an Employee's Manager",
                        "View a Manager's Employees",
                        "View a Department's Employees",
                        "Delete a Department",
                        "Delete a Role",
                        "Delete an Employee",
                        "View a Department's Budget"]
        }
    ])
    .then((answers) => {
        // Execute handler function for viewing all departments
        if (answers.mainMenuChoice == "View All Departments") {
            handlerFunctions.viewAllDepartments();

            // Return to main menu prompts
            mainMenuPrompts();
        }
        // Execute handler function for viewing all roles
        else if (answers.mainMenuChoice === "View All Roles") {
            handlerFunctions.viewAllRoles();
            
            // Return to main menu prompts
            mainMenuPrompts();
        }
        // Execute handler function for viewing all employees
        else if (answers.mainMenuChoice === "View All Employees") {
            handlerFunctions.viewAllEmployees();
            
            // Return to main menu prompts
            mainMenuPrompts();
        }
        // Execute handler function for adding a department to the departments table
        else if (answers.mainMenuChoice === "Add a Department") {
            // handlerFunctions.viewAllDepartments();
            addDepartmentPrompts();
        }
        // Execute handler function for adding a role to the roles table
        else if (answers.mainMenuChoice === "Add a Role") {
            // handlerFunctions.viewAllRoles();
            addRolePrompts();
        }
        // Execute handler function for adding an employee to the employees table
        else if (answers.mainMenuChoice === "Add an Employee") {
            // handlerFunctions.viewAllEmployees();
            addEmployeePrompts();
        }
        // Execute handler function for updating an employee's role in the employees tables
        else if (answers.mainMenuChoice === "Update an Employee's Role") {
            updateEmployeeRolePrompts();
        }
        // Execute handler function for updating an employee's manager in the employees table
        else if (answers.mainMenuChoice === "Update an Employee's Manager") {
            updateManagerOfEmployeePrompts();
        }
        // Execute handler function for viewing a manager's employees
        else if (answers.mainMenuChoice === "View a Manager's Employees") {
            viewEmployeesOfManagerPrompts();
        }
        // Execute handler function for viewing a department's employees
        else if (answers.mainMenuChoice === "View a Department's Employees") {
            viewEmployeesOfDepartmentPrompts();
        }
        // Execute handler function for for deleting a department from the departments table
        else if (answers.mainMenuChoice === "Delete a Department") {
            deleteDepartmentPrompts();
        }
        // Execute handler function for deleting a role in the roles table
        else if (answers.mainMenuChoice === "Delete a Role") {
            deleteRolePrompts();
        }
        // Execute handler function for deleting an employee in the employees table
        else if (answers.mainMenuChoice === "Delete an Employee") {
            deleteEmployeePrompts();
        }
        // Execute handler function for viewing a department's budget
        else if (answers.mainMenuChoice === "View a Department's Budget") {
            viewBudgetOfDepartmentPrompts();
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

// Prompts for adding a department
function addDepartmentPrompts() {
    console.log(`
================
Add a Department
================
`);
    return inquirer
    .prompt([
        // Add a department
        {
            type: "input",
            name: "addDepartment",
            message: "Please enter the name of the department that you would like to add or press the return key to return to the main menu:",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    // If the user returns an empty string, return to the main menu prompts
                    mainMenuPrompts();
                }
            }
        }
    ])
    .then((answers) => {
        // Execute addDepartment handler function
        handlerFunctions.addDepartment(answers.addDepartment);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function addRolePrompts() {
    console.log(`
==========
Add a Role
==========
`);
    return inquirer
    .prompt([
        // Add a role title
        {
            type: "input",
            name: "addRoleTitle",
            message: "Please enter the title of the role that you would like to add or press the return key to return to the main menu:",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    // If the user returns an empty string, return to the main menu prompts
                    mainMenuPrompts();
                }
            }
        },

        // Add a salary to the role
        {
            type: "input",
            name: "addRoleSalary",
            message: "Please enter the salary of the role:",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    // If the user's input is empty, prompt the user to submit a non-empty input
                    console.log("This is a required field. Please enter a valid salary.");
                    return false;
                }
            }
        },

        // Add the role to a department
        {
            type: "list",
            name: "addRoleDepartment",
            message: "Please choose the department that contains this role:",
            choices: departmentsArray
        }
    ])
    .then((answers) => {
        // Find the departmentID
        const departmentID = Object.keys(JSON.parse(answers.addRoleDepartment))[0];

        // Execute the addRole handler function
        handlerFunctions.addRole(answers.addRoleTitle, answers.addRoleSalary, departmentID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function addEmployeePrompts() {
    console.log(`
===============
Add an Employee
===============
`);
    return inquirer
    .prompt([
        // Add an employee's first name
        {
            type: "input",
            name: "addEmployeeFirstName",
            message: "Please enter the first name of the employee that you would like to add or press the return key to return to the main menu:",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    // If the user returns an empty string, return to the main menu prompts
                    mainMenuPrompts();
                }
            }
        },

        // Add an employee's last name
        {
            type: "input",
            name: "addEmployeeLastName",
            message: "Please enter the last name of the employee:",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    // If the user's input is empty, prompt the user to submit a non-empty input
                    console.log("This is a required field. Please enter a valid salary.");
                    return false;
                }
            }
        },

        // Add a role to the employee
        {
            type: "list",
            name: "addEmployeeRole",
            message: "Please choose this employee's role:",
            choices: rolesArray
        },

        // Add a manager for the employee
        {
            type: "list",
            name: "addEmployeeManager",
            message: "Please choose this employee's manager or press the return key for no manager:",
            choices: employeesArray
        }
    ])
    .then((answers) => {
        // Find the roleID and managerID
        const roleID = Object.keys(JSON.parse(answers.addEmployeeRole))[0];
        const managerID = Object.keys(JSON.parse(answers.addEmployeeManager))[0];

        // Execute the addEmployee handler function
        handlerFunctions.addEmployee(answers.addEmployeeFirstName, answers.addEmployeeLastName, roleID, managerID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function updateEmployeeRolePrompts() {
    console.log(`
=========================
Update an Employee's Role
=========================
`);
    return inquirer
    .prompt([
        // Choose an emplyoee to update
        {
            type: "list",
            name: "updateEmployee",
            message: "Please choose an employee to update:",
            choices: employeesArray
        },

        // Choose the employee's new role
        {
            type: "list",
            name: "updateEmployeeRole",
            message: "Please choose this employee's new role:",
            choices: rolesArray
        }
    ])
    .then((answers) => {
        // Find the roleID and employeeID
        const roleID = Object.keys(JSON.parse(answers.updateEmployeeRole))[0];
        const employeeID = Object.keys(JSON.parse(answers.updateEmployee))[0];

        // Execute the updateEmployeeRole handler function
        handlerFunctions.updateEmployeeRole(roleID, employeeID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}


function updateManagerOfEmployeePrompts() {
    console.log(`
============================
Update an Employee's Manager
============================
`);
    return inquirer
    .prompt([
        // Choose an employee to update
        {
            type: "list",
            name: "updateEmployee",
            message: "Please choose an employee to update:",
            choices: employeesArray
        },

        // Update the employee's manager
        {
            type: "list",
            name: "updateEmployeeManager",
            message: "Please choose this employee's new manager:",
            choices: employeesArray
        }
    ])
    .then((answers) => {
        // Find the managerID and employeeID
        const managerID = Object.keys(JSON.parse(answers.updateEmployeeManager))[0];
        const employeeID = Object.keys(JSON.parse(answers.updateEmployee))[0];

        // Execute the updateEmployeeRole handler function
        handlerFunctions.updateManagerOfEmployee(managerID, employeeID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function viewEmployeesOfManagerPrompts() {
    console.log(`
==========================
View a Manager's Employees
==========================
`);
    return inquirer
    .prompt([
        // Choose an employee to view his/her manager
        {
            type: "list",
            name: "viewManager",
            message: "Please choose an employee (manager):",
            choices: employeesArray
        }
    ])
    .then((answers) => {
        // Find the managerID
        const managerID = Object.keys(JSON.parse(answers.viewManager))[0];

        console.log("managerid", managerID);
        // Execute the viewEmployeesOfManager handler function
        handlerFunctions.viewEmployeesOfManager(managerID);

        console.log("after");
        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function viewEmployeesOfDepartmentPrompts() {
    console.log(`
=============================
View a Department's Employees
=============================
`);
    return inquirer
    .prompt([
        // Choose a department to view employees in it
        {
            type: "list",
            name: "viewDepartment",
            message: "Please choose an department:",
            choices: departmentsArray
        }
    ])
    .then((answers) => {
        // Find the departmentID
        const departmentID = Object.keys(JSON.parse(answers.viewDepartment))[0];

        // Execute the viewEmployeesInDepartment handler function
        handlerFunctions.viewEmployeesInDepartment(departmentID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function deleteDepartmentPrompts() {
    console.log(`
===================
Delete a Department
===================
`);
    return inquirer
    .prompt([
        // Choose a department to delete
        {
            type: "list",
            name: "viewDepartment",
            message: "Please choose an department to delete:",
            choices: departmentsArray
        }
    ])
    .then((answers) => {
        // Find the departmentID
        const departmentID = Object.keys(JSON.parse(answers.viewDepartment))[0];

        // Execute the deleteDepartment handler function
        handlerFunctions.deleteDepartment(departmentID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function deleteRolePrompts() {
    console.log(`
=============
Delete a Role
=============
`);
    return inquirer
    .prompt([
        // Choose a role to delete
        {
            type: "list",
            name: "deleteRole",
            message: "Please choose a role to delete:",
            choices: rolesArray
        }
    ])
    .then((answers) => {
        // Find the roleID
        const roleID = Object.keys(JSON.parse(answers.deleteRole))[0];

        // Execute the deleteRole handler function
        handlerFunctions.deleteRole(roleID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function deleteEmployeePrompts() {
    console.log(`
==================
Delete an Employee
==================
`);
    return inquirer
    .prompt([
        // Choose an employee to delete
        {
            type: "list",
            name: "deleteEmployee",
            message: "Please choose an employee to delete:",
            choices: employeesArray
        }
    ])
    .then((answers) => {
        // Find the employeeID
        const employeeID = Object.keys(JSON.parse(answers.deleteEmployee))[0];

        // Execute the deleteEmployee handler function
        handlerFunctions.deleteEmployee(employeeID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

function viewBudgetOfDepartmentPrompts() {
    console.log(`
======================
View Department Budget
======================
`);
    return inquirer
    .prompt([
        // Choose a department to see its budget
        {
            type: "list",
            name: "viewDepartmentBudget",
            message: "Please choose an department:",
            choices: departmentsArray
        }
    ])
    .then((answers) => {
        // Find the departmentID
        const departmentID = Object.keys(JSON.parse(answers.viewDepartmentBudget))[0];

        // Execute the viewDepartmentBudget handler function
        handlerFunctions.viewDepartmentBudget(departmentID);

        // Return back to the main menu prompts
        mainMenuPrompts();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

console.log("Welcome to the Employer Tracker Content Management System (CMS) Application!");

console.log(`
==================
Personnel Database
==================
`,);

// Main menu prompts
mainMenuPrompts();

// Test constants
// const departmentName = "Test Department";
// const title = "Test Title";
// const salary = 100000.000;
// const departmentID = 1;
// const firstName = "Test First Name";
// const lastName = "Test Last Name";
// const roleID = 2;
// const managerID = 1;
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