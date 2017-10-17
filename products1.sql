CREATE DATABASE products1(
	id int null auto_increment,
    product_name VARCHAR(100) NULL,
    grocery VARCHAR(45) NULL,
    price DECIMAL(10, 2) NULL,
    quantity INT NULL,
    PRIMARY KEY(id)
);


INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("beef", "grocery",6.5, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("egg", "grocery", 1.50, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("milk", "grocery",2.50, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("tv", "electronics", 99.9, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("laptop", "electronics",750, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("pen", "stationery",.50, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("notePad", "stationery",1.3, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("book", "stationery", 18.0, 100);

INSERT INTO products1( product_name, grocery,price, stock_quantity)
VALUES ("tshirt", "cloth", 21.0, 100);