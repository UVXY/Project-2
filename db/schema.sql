DROP DATABASE IF EXISTS fit_db;
CREATE DATABASE fit_db;

USE fit_db;

CREATE TABLE client
(
	id int NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
	name varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE activities
(
	id int NOT NULL AUTO_INCREMENT,
    gym BOOLEAN,
	basketball BOOLEAN,
	running BOOLEAN, 
	volleyball BOOLEAN,
    client_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES client(id)
);

-- INSERT INTO client (email, name, password)
-- VALUES 	("user@user.com", "juan", "password");

-- INSERT INTO activities (gym, basketball, running, volleyball, client_id)
-- VALUES 	(true, NULL, NULL, NULL, 1);