CREATE TABLE user_account (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO user_account (first_name, last_name, email, password)
VALUES ('Jeremy', 'Kim', 'test@gmail.com', '2202');
INSERT INTO user_account (first_name, last_name, email, password)
VALUES ('Stef', 'Duffon', 'stef@gmail.com', '1303');
INSERT INTO user_account (first_name, last_name, email, password)
VALUES ('Matmat', 'Kim', 'matmat@gmail.com', 'xxxx');

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price money NOT NULL
);

INSERT INTO product (name, description, price)
VALUES ('Shirt', 'Perfect', 50);
INSERT INTO product (name, description, price)
VALUES ('Hat', 'Dirty', 90);
INSERT INTO product (name, description, price)
VALUES ('Short', 'Small', 5);

CREATE TABLE order_info (
  id SERIAL PRIMARY KEY,
  order_date timestamp,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user_account(id)	
);

CREATE TABLE cart (
  user_id int,
  product_id int,
  quantity int DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES user_account(id),
  FOREIGN KEY (product_id) REFERENCES product(id),
  PRIMARY KEY (user_id, product_id)	
);

CREATE TABLE order_items (
    order_id int,
    product_id int,
    quantity int DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES user_account(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    PRIMARY KEY (order_id, product_id)	
);