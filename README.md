# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Description**: This is a employee tracker content management system (CMS) Node.js application that runs using the Command Line Interface. This application allows the user to interface with a MySQL database that contains information about an organization's employees. This application steamlines the database management process so that users can focus on the content of the database while the application's back-end processes take care of the database reading/writing and displaying information processes.

**Deployment Link**: Please see [installation](#installation) instructions below.

**Video Tutorial Links**:  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Testing](#testing)
* [Credit](#credit)
* [Contributions](#contributions)
* [Questions](#questions)
* [Badges](#badges)
* [License](#license)

### Installation
1. Download [git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download/), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [MySQL](https://www.mysql.com/downloads/).
2. Clone this repository by typing `git clone https://github.com/JaspreetKhela/employee-tracker.git` in your desired directory using the Command Line Interface.
3. Download npm dependencies by typing `npm install` in your Command Line Interface. This application using the mysql2, inquirer, console.table, and synchronized-promise npm packages.
4. Type `mysql -u root -p` in the application's root directory and enter your MySQL credentials.
5. Create the personnel database and populate it with data by typing `source ./db/db.sql;`, `source ./db/schema.sql;`, and `source ./db/seeds.sql;` into the MySQL shell. Once completed, type `quit;` to exit the MySQL shell.

### Usage
To use this application, navigate to the root folder in the cloned repository's directory and simply type `node index.js` into the Command Line Interface.

**Screenshots**:
<img width="1440" alt="Screen Shot 2021-09-10 at 10 46 17 PM" src="https://user-images.githubusercontent.com/80941606/132933991-d8c93840-764c-4d39-ab8c-97a4e6b48f59.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 46 32 PM" src="https://user-images.githubusercontent.com/80941606/132933995-d9893b2a-46e7-4cfa-a410-0a23ab223d7f.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 46 50 PM" src="https://user-images.githubusercontent.com/80941606/132933997-39393cc3-dd76-4f13-9bc1-a1b81cdb5817.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 46 58 PM" src="https://user-images.githubusercontent.com/80941606/132934001-f3f29c00-1d94-495a-a322-9272afbc9e8f.png">
<img width="1440" alt="Screen Shot 2021-09-16 at 4 40 48 PM" src="https://user-images.githubusercontent.com/80941606/133682848-ec04d3e3-ac9e-4354-b1df-ca3f8b04f3d5.png">
<img width="1440" alt="Screen Shot 2021-09-16 at 4 40 58 PM" src="https://user-images.githubusercontent.com/80941606/133682873-82af4845-94cd-4c9c-8fc8-8d5b78fb5179.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 48 12 PM" src="https://user-images.githubusercontent.com/80941606/132934012-585d1e86-4cc4-4ff7-a9f7-85d9ed503071.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 48 51 PM" src="https://user-images.githubusercontent.com/80941606/132934018-658ebbd0-3fb1-4cd1-8d80-bdcba0f92744.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 48 58 PM" src="https://user-images.githubusercontent.com/80941606/132934021-a06f9c9b-310f-499c-b5df-94eb930e538a.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 49 10 PM" src="https://user-images.githubusercontent.com/80941606/132934023-c7e34bbf-176b-45a2-91f1-cf26f93457b8.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 49 58 PM" src="https://user-images.githubusercontent.com/80941606/132934025-085e7d89-10b9-4067-8c69-c56471697809.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 50 05 PM" src="https://user-images.githubusercontent.com/80941606/132934028-486a2838-d7bf-4a53-ae8e-5bc2807e7743.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 50 17 PM" src="https://user-images.githubusercontent.com/80941606/132934030-ce35dee3-002c-4fa8-873c-25737c3f883a.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 50 50 PM" src="https://user-images.githubusercontent.com/80941606/132934033-c26ab2e8-a1b6-4c9f-b0d8-ce74bb21465b.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 50 57 PM" src="https://user-images.githubusercontent.com/80941606/132934037-cfba4007-0134-4fd7-9c31-30181fdbb633.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 51 23 PM" src="https://user-images.githubusercontent.com/80941606/132934041-2be6fcf9-3e4d-409a-a598-b5af115f1efb.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 51 44 PM" src="https://user-images.githubusercontent.com/80941606/132934042-542a5a48-b98a-4334-b893-b8b1cbb9d389.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 52 05 PM" src="https://user-images.githubusercontent.com/80941606/132934045-c1960038-88b6-47c6-8a26-e385ce2845a2.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 52 24 PM" src="https://user-images.githubusercontent.com/80941606/132934047-4420e909-3955-4516-bf33-39c8e4c1c003.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 52 58 PM" src="https://user-images.githubusercontent.com/80941606/132934049-9e69a9e0-2ba1-4816-b182-c9607658d502.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 53 05 PM" src="https://user-images.githubusercontent.com/80941606/132934050-5a21082f-d9cc-4db3-a110-5a8e9921eddc.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 00 PM" src="https://user-images.githubusercontent.com/80941606/132934051-3f09c528-5847-4e66-a255-1cf14dc15fa9.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 16 PM" src="https://user-images.githubusercontent.com/80941606/132934052-8ea91a8d-f4c7-443a-a684-5229eca3c003.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 22 PM" src="https://user-images.githubusercontent.com/80941606/132934053-65b3bf6a-70c9-4d39-8779-63956d2a60e3.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 35 PM" src="https://user-images.githubusercontent.com/80941606/132934057-0c6037e3-0549-499e-b6c2-8989c170fdcd.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 42 PM" src="https://user-images.githubusercontent.com/80941606/132934058-cc317960-b45d-4a1e-b5c8-c9bc9f60806e.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 54 48 PM" src="https://user-images.githubusercontent.com/80941606/132934060-57b03c43-56c0-440b-8bbb-725b8c66fbc0.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 55 29 PM" src="https://user-images.githubusercontent.com/80941606/132934063-539b358e-fdb1-4713-8576-9608725035b5.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 55 43 PM" src="https://user-images.githubusercontent.com/80941606/132934064-fe428c02-4e2b-4cae-ab29-565b8d44787f.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 55 49 PM" src="https://user-images.githubusercontent.com/80941606/132934067-1cb4b80b-1413-46ce-a063-a8fa7bf99bdc.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 01 PM" src="https://user-images.githubusercontent.com/80941606/132934069-7bbbfe89-e42d-443c-bb0b-6f8ae54a355d.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 09 PM" src="https://user-images.githubusercontent.com/80941606/132934073-463919e8-5126-476d-b723-dc3a5a7e32d3.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 20 PM" src="https://user-images.githubusercontent.com/80941606/132934074-e8f28d8a-0399-4aad-b92d-3fdd547c32da.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 36 PM" src="https://user-images.githubusercontent.com/80941606/132934079-196e807b-0079-4c6a-8846-2d361fde743a.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 43 PM" src="https://user-images.githubusercontent.com/80941606/132934083-c27b88bf-4928-4732-a4b7-85fd7876cad1.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 49 PM" src="https://user-images.githubusercontent.com/80941606/132934084-83b8b2cb-1ea1-457d-a566-2b4e337dbaa0.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 56 56 PM" src="https://user-images.githubusercontent.com/80941606/132934085-670d559e-1f7b-413c-9d8b-284c993cc86a.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 57 14 PM" src="https://user-images.githubusercontent.com/80941606/132934086-af1a6c60-fa3a-4678-81b8-9520e4cec02a.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 10 57 21 PM" src="https://user-images.githubusercontent.com/80941606/132934088-c6f92832-244f-4793-9cd7-99138d4a8e9c.png">

### Features
This application allows the following operations on the personnel database:
- View All Departments
- View All Roles
- View All Employees
- Add a Department
- Add a Role
- Add an Employee
- Update an Employee's Role
- Update an Employee's Manager
- View a Manager's Employees
- View a Department's Employees
- Delete a Department
- Delete a Role
- Delete an Employee
- View a Department's Budget

### Testing
This application can be directly tested in the Command Line Interface by using it.

### Credit
This project was created and is maintained by Jaspreet Khela.

### Contributions
This project is currently not open for contributions.

### Questions
Please [email](jaspreet.khela@gmail.com) me if you have any questions.
You may also contact me through my [GitHub](https://github.com/JaspreetKhela) profile. 

### Badges
N/A

### License
MIT License
