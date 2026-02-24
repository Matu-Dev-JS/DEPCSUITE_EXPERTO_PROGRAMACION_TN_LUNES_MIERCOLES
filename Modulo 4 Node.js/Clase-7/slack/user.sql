/*
SQL NO es case sensitive osea no distingue entre MAYUSCULAS y minusculas

CREATE TABLE Nos permite crear TABLAS
Dentro de los () declaro las columnas, empezando por su nombre
Separo las columnas por ','
*/

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    telephone_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    img_profile VARCHAR(255)
)
