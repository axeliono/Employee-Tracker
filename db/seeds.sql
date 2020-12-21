INSERT INTO department (name)
VALUES 
("human resources"), 
("frontend"), 
("backend"), 
("cybersecurity"), 
("full-stack");

INSERT INTO roles (title, salary, department_id)
VALUES
("FullStack-Engineer", 75000, 5),
("Frontend-Developer", 60000, 2),
("Backend-Developer", 70000, 3),
("HR-Representative", 55000, 1),
("Authentication-Developer", 70500, 4),
("Frontend-Manager", 80500, 2),
("Backend-Manager", 80500, 3),
("Cybersecurity-Manager", 80500, 4),
("HR-Manager", 80500, 1),
("FullStack-Development-Manager", 80500, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Ronald', 'Firbank', 1, 1),
('virginia', 'Woolf', 2, 2),
('Piers', 'Galveston', 3, 3),
('Charles', 'LeRoi', 4, 4),
('Katherine', 'Mansfield', 5, 5),
('Dora', 'Carrington', 1, 1),
('Edward', 'Bellamy', 2, 2),
('Montague', 'Summers', 3, 3),
('Octavia', 'Butler', 4, 4),
('Unica', 'Zurn', 5, 5),
('Frederick', 'Marryat', 1, 1),
('Harriet', 'Martineau', 2, 2),
('George', 'Meredith', 3, 3),
('Margaret', 'Oliphant', 4, 4),
('Anthony', 'Trollope', 5, 5),
('Charlotte', 'Yonge', 1, 1),
('Horace', 'Walpole', 2, 2),
('Matthew', 'Lewis', 3, 3),
('William', 'Bedford', 4, 4),
('Anne', 'Radcliffe', 5, 5),
('Charles', 'Brown', 1, 1),
('Eliza', 'Parsons', 2, 2);

INSERT INTO managers (first_name, last_name, role_id)
VALUES  
('Susan', 'Hill', 6),
('Sydney', 'Owenson', 7),
('Hubert', 'Crackanthorpe', 8),
('William', 'Carleton', 9),
('Gerald', 'Griffin', 10);
