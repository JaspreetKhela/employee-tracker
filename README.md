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
<img width="1440" alt="Screen Shot 2021-09-10 at 8 20 26 PM" src="https://user-images.githubusercontent.com/80941606/132931662-93799b44-01a7-48ea-afcc-72294b1d8224.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 8 20 50 PM" src="https://user-images.githubusercontent.com/80941606/132931669-8bd79add-4ddf-4f7c-b38e-388bf1cc0baa.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 08 14 PM" src="https://user-images.githubusercontent.com/80941606/132931672-2b64869d-62b7-4508-ab2a-33e3fde98d87.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 08 33 PM" src="https://user-images.githubusercontent.com/80941606/132931678-e50eb874-4092-42d3-9729-6ba2b792c9e3.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 08 52 PM" src="https://user-images.githubusercontent.com/80941606/132931680-9fef7fa7-b338-4c4e-9ee1-8c7ceeefa3e9.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 09 43 PM" src="https://user-images.githubusercontent.com/80941606/132931683-4cb0481b-6920-4255-86a0-a14d23ede60c.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 11 53 PM" src="https://user-images.githubusercontent.com/80941606/132931684-79b4f203-9510-49f3-9ddb-d4fbefe0e5ee.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 12 35 PM" src="https://user-images.githubusercontent.com/80941606/132931686-37317931-4b76-4137-9525-f07b07001ca1.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 13 44 PM" src="https://user-images.githubusercontent.com/80941606/132931689-2a9657ab-7498-445d-9d6a-803992f8c283.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 14 08 PM" src="https://user-images.githubusercontent.com/80941606/132931705-583a65a2-02bc-492e-a622-20829d139d8c.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 14 33 PM" src="https://user-images.githubusercontent.com/80941606/132931707-0f2d4df9-d0a9-4c58-85e7-b8b0bd8c7177.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 14 52 PM" src="https://user-images.githubusercontent.com/80941606/132931709-d3484b82-0905-477c-be86-b2f7128e0cc9.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 15 18 PM" src="https://user-images.githubusercontent.com/80941606/132931713-876568ba-5905-4a2b-aeb1-ad115135f786.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 15 31 PM" src="https://user-images.githubusercontent.com/80941606/132931717-48839633-5931-4d69-a864-3e5447ab34ad.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 15 58 PM" src="https://user-images.githubusercontent.com/80941606/132931723-4741b0ce-c643-470b-85c8-9451b8f25610.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 19 50 PM" src="https://user-images.githubusercontent.com/80941606/132931726-8e316973-874e-4d4b-aa2e-0813e11b7371.png">
<img width="1440" alt="Screen Shot 2021-09-10 at 9 20 02 PM" src="https://user-images.githubusercontent.com/80941606/132931731-00598257-1081-4970-bc61-2881f97e634e.png">

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
