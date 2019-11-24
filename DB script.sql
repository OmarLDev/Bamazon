CREATE DATABASE BAMAZON;

USE BAMAZON;

CREATE TABLE IF NOT EXISTS products(
	item_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL, 
    department_name VARCHAR(30) NOT NULL, 
    price NUMERIC(5,2) NOT NULL, 
    stock_quantity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS users(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    role VARCHAR(10) NOT NULL
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Risk Board Game','Games & Entertainment',25.0,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Dog bed, L','Pets',20.49,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Wireless mouse','Computers & Electronics',12.50,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Fridge Magnets, set of 10','Home & Decor',5.0,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Trash can','Home & Decor',7.25,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Dog treats','Pets',10.0,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Wireless sound system','Computers & Electronics',100.99,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Reusable water bottle','Home & Decor',10.0,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Travel briefcase','Travel & Leisure',100.0,10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('PS7 (Renewed)','Games & Entertainment',149.99,10);

INSERT INTO users(username, password, role) VALUES ('Omar','Omar', 'Customer');
INSERT INTO users(username, password, role) VALUES ('Diana','Diana', 'Customer');
INSERT INTO users(username, password, role) VALUES ('Fernamda','Fernanda', 'Customer');