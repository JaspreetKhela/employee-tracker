-- Seed the departments table
INSERT INTO departments
    (department_name)
VALUES
    ("Production"),
    ("Research and Development"),
    ("Purchasing")
    ("Marketing"),
    ("Human Resource Management"),
    ("Accounting and Finance");

-- Seed the roles table
INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Product Manager", 100000.00, 1),
    ("Industrial Designer", 100000.00, 1),
    ("Engineer", 125000.00, 1),
    ("Data Scientist", 125000.00, 2);

-- Seed the employees table
INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Jaspreet", "Khela", 1, NULL),
    ("Tom", "Jones", 2, 1),
    ("Sally", "Smith", 3, 1),
    ("John", "Doe", 3, 1),
    ("Carol", "Chen", 4, 1);