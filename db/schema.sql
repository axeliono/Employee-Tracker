DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    CONSTRAINT fk_managers FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
)

CREATE TABLE managers (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    CONSTRAINT fk_manager_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,

)


CREATE TABLE  roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL
);

