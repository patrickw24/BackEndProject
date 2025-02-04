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

select * from products

drop table users 