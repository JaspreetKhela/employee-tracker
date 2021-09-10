// Import the database connection
const db = require("../db/connection");

// Import the console.table module
const cTable = require("console.table");

// Importing synchronized-promise module to create synchronized function calls to findEmployeeRecord, findRoleRecord, and findDepartmentRecord
const sp = require('synchronized-promise');

// Handler function for finding an employee by his/her ID
function findEmployeeRecord(employeeID) {
    return new Promise((resolve, reject) => {
        // Create SQL query using provided parameters
        const sql = `SELECT * FROM employees WHERE id = ?`;
        const params = [employeeID];

        // Query the personnel database
        db.query(sql, params, (err, rows) => {
            if (err) {
                return reject(err);
            }

            resolve(JSON.parse(JSON.stringify(rows[0])));
        });
    });
}

// Handler function for finding a role by its ID
function findRoleRecord(roleID) {
    return new Promise((resolve, reject) => {
        // Create SQL query using provided parameters
        const sql = `SELECT * FROM roles WHERE id = ?`;
        const params = [roleID];

        // Query the personnel database
        db.query(sql, params, (err, rows) => {
            if (err) {
                return reject(err);
            }

            resolve(JSON.parse(JSON.stringify(rows[0])));
        });
    });
}


// Handler function for finding a department by its ID
function findDepartmentRecord(departmentID) {
    return new Promise((resolve, reject) => {
        // Create SQL query using provided parameters
        const sql = `SELECT * FROM departments WHERE id = ?`;
        const params = [departmentID];

        // Query the personnel database
        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err);
            }

            resolve(JSON.parse(JSON.stringify(rows[0])));
        });
    });
}

// Synchronized handler functions
let syncFindEmployeeRecord = sp(findEmployeeRecord)
let syncFindRoleRecord = sp(findRoleRecord);
let syncFindDepartmentRecord = sp(findDepartmentRecord);

// Handler function for viewing all departments
function viewAllDepartments() {
    // Create SQL query
    const sql = `SELECT * FROM departments`;

    // Query the personnel database
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log("Departments Table:");
        console.table(rows);
    });
}

// Handler function for viewing all roles
function viewAllRoles() {
    // Create SQL query
    const sql = `SELECT * FROM roles`;

    // Query the personnel database
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log("Roles Table:");
        console.table(rows);
    });
}

// Handler function for viewing all employees
function viewAllEmployees() {
    // Create SQL query
    const sql = `SELECT * FROM employees`;

    // Query the personnel database
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log("Employees Table:");
        console.table(rows);
    });
}

// Handler function for adding a department
function addDepartment(departmentName) {
    // Create SQL query using provided parameters
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    const params = [departmentName];

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${departmentName} was successfully inserted into the department table.`);
        viewAllDepartments();
    });
}

// Handler function for adding a role
function addRole(title, salary, departmentID) {
    // Create SQL query using provided parameters
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [title, salary, departmentID];

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`Role has been successfully inserted into the roles table.`);
        viewAllRoles();
    });
}

// Handler function for adding an employee
function addEmployee(firstName, lastName, roleID, managerID) {
    // Create SQL query using provided parameters
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [firstName, lastName, roleID, managerID];

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${firstName} has been added to the employees table.`);
        viewAllEmployees();
    });
}

// Handler function for updating an employee's role
function updateEmployeeRole(roleID, employeeID) {
    // Create SQL query using provided parameters
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [roleID, employeeID];

    // Find records associated with the parameter IDs
    const employeeRecord = syncFindEmployeeRecord(employeeID);
    const roleRecord = syncFindRoleRecord(roleID);
    const employeeName = employeeRecord.first_name;
    const roleTitle = roleRecord.title;

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${employeeName}'s role has been updated to ${roleTitle}.`);
        viewAllEmployees();
    });
}

// Handler function for updating an employee's manager information
function updateManagerOfEmployee(managerID, employeeID) {
    // Create SQL query using provided parameters
    const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
    const params = [managerID, employeeID];

    // Find records associated with the parameter IDs
    const employeeRecord = syncFindEmployeeRecord(employeeID);
    const managerRecord = syncFindEmployeeRecord(managerID);
    const employeeName = employeeRecord.first_name;
    const managerName = managerRecord.first_name;

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${employeeName}'s manager is now ${managerName}.`);
        viewAllEmployees();
    });
}

// Handler function for viewing employees by manager
function viewEmployeesOfManager(managerID) {
    // Create SQL query using provided parameters
    const sql = `SELECT * FROM employees WHERE manager_id = ?`;
    const params = [managerID];

    // Find records associated with the parameter IDs
    const managerRecord = syncFindEmployeeRecord(managerID);
    const managerName = managerRecord.first_name;

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${managerName} manages the following people:`);
        console.table(rows);
    });
}

// Handler function for viewing employees by department
function viewEmployeesInDepartment(departmentID) {
    // Create SQL query using provided parameters
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id, employees.created_at 
                    FROM employees
                    INNER JOIN roles
                    ON employees.role_id = roles.id
                    INNER JOIN departments
                    ON roles.department_id = departments.id
                    WHERE departments.id = ?`;
    const params = [departmentID];

    // Find records associated with the parameter IDs
    const departmentRecord = syncFindDepartmentRecord(departmentID);
    const departmentName = departmentRecord.department_name;

    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${departmentName} has the following employees:`);
        console.table(rows);
    });
}

// Handler function for deleting a department
function deleteDepartment(departmentID) {
    // Create SQL query using provided parameters
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [departmentID];

    // Find records associated with the parameter IDs
    const departmentRecord = syncFindDepartmentRecord(departmentID);
    const departmentName = departmentRecord.department_name;
    
    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${departmentName} has been deleted from the departments table.`);
        viewAllDepartments();
    });
}

// Handler function for deleting a role
function deleteRole(roleID) {
    // Create SQL query using provided parameters
    const sql = `DELETE FROM roles WHERE id = ?`;
    const params = [roleID];

    // Find records associated with the parameter IDs
    const roleRecord = syncFindRoleRecord(roleID);
    const roleTitle = roleRecord.title;
    
    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${roleTitle} has been deleted from the role table.`);
        viewAllRoles();
    });
}

// Handler function for deleting a employee
function deleteEmployee(employeeID) {
    // Create SQL query using provided parameters
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [employeeID];

    // Find records associated with the parameter IDs
    const employeeRecord = syncFindEmployeeRecord(employeeID);
    const employeeName = employeeRecord.first_name;
    
    // Query the personnel database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }

        // Display confirmation information
        console.log(`${employeeName} has been deleted from the employees table.`);
        viewAllEmployees();
    });
}

// Export the handler functions
module.exports = { 
    viewAllDepartments, 
    viewAllRoles, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    addEmployee,
    updateEmployeeRole,
    updateManagerOfEmployee,
    viewEmployeesOfManager,
    viewEmployeesInDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee
}