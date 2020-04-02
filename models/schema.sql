DROP DATABASE IF EXISTS grocerybuddy;
CREATE DATABASE grocerybuddy;

CREATE TABLE users (
    id int AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    user_address_street varchar NOT NULL,
    user_address_street2 varchar,
    user_address_city varchar NOT NULL,
    user_address_state varchar NOT NULL,
    user_address_zip int(5) NOT NULL,
    email varchar NOT NULL,
    is_vendor boolean DEFAULT 0,
    vendor_id int,
    user_password varchar NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendors(id)
);

CREATE TABLE products (
    id int AUTO_INCREMENT,
    product_name varchar not null,
    product_description varchar, 
    product_category varchar not null,
    product_subcategory varchar,
    product_brand varchar not null,
    product_vendor_id int,
    product_price decimal(5,2) not null,
    PRIMARY KEY (id),
    FOREIGN KEY (product_vendor_id) REFERENCES vendors(id)
);

 CREATE TABLE lists (
    id int AUTO_INCREMENT,
    list_name varchar not null,
    list_user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (list_user_id) REFERENCES users(id), 
 );


 CREATE TABLE list_products (
    id int AUTO_INCREMENT,
    product_id int,
    quantity_ordered int,
    list_id int, 
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id), 
    FOREIGN KEY (list_id) REFERENCES lists(id) 
 );

 CREATE TABLE vendors (
    id int AUTO_INCREMENT,
    vendor_name varchar not null,
    vendor_address_street varchar not null,
    vendor_address_street2 varchar, 
    vendor_address_city varchar not null,
    vendor_address_state varchar not null,
    vendor_address_zip int(5) not null,
    vendor_contact_name varchar not null,
    vendor_email varchar not null,
    vendor_password varchar not null,
    user_vendor_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_vendor_id) REFERENCES users(id)
 );
