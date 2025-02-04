-- Active: 1738375381471@@127.0.0.1@5432@codexpathway4
create table users (
    id_users SERIAL PRIMARY KEY,
    name text NOT NULL,
    email text UNIQUE NOT NULL
);

create table products (

    id_products SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text, 
    price DECIMAL NOT NULL,
    stock INT NOT NULL
);

create table orders (
    id_orders SERIAL PRIMARY KEY,
    id_users INT REFERENCES users(id_users),
    order_date DATE DEFAULT CURRENT_DATE,
    status TEXT 
);

create table order_details (
    id_details SERIAL PRIMARY KEY,
    id_orders INT REFERENCES orders(id_orders),
    id_products INT REFERENCES products(id_products),
    quantity INT NOT NULL,
    price DECIMAL NOT NULL
);