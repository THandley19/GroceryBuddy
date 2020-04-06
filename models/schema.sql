DROP DATABASE IF EXISTS grocerybuddy;
CREATE DATABASE grocerybuddy;

USE grocerybuddy;

CREATE TABLE user
(
  id int
  AUTO_INCREMENT,
    first_name varchar
  (255) NOT NULL,
    last_name varchar
  (255) NOT NULL,
    user_address_street varchar
  (255) NOT NULL,
    user_address_street2 varchar
  (255),
    user_address_city varchar
  (255) NOT NULL,
    user_address_state varchar
  (255) NOT NULL,
    user_address_zip int NOT NULL,
    email varchar
  (255) NOT NULL,
    is_vendor boolean DEFAULT 0,
    vendor_id int,
    user_password varchar
  (255) NOT NULL,
    PRIMARY KEY
  (id)
);

  CREATE TABLE vendors
  (
    id int
    AUTO_INCREMENT,
    vendor_name varchar
    (255) not null,
    vendor_address_street varchar
    (255) not null,
    vendor_address_street2 varchar
    (255), 
    vendor_address_city varchar
    (255) not null,
    vendor_address_state varchar
    (255) not null,
    vendor_address_zip int not null,
    vendor_contact_name varchar
    (255) not null,
    vendor_email varchar
    (255) not null,
    vendor_password varchar
    (255) not null,
    user_vendor_id int,
    PRIMARY KEY
    (id)
 );

    -- ALTER TABLE users ADD FOREIGN KEY (vendor_id) REFERENCES vendors(id);

    -- ALTER TABLE vendors ADD FOREIGN KEY (user_vendor_id) REFERENCES users(id);

    CREATE TABLE products
    (
      id int
      AUTO_INCREMENT,
    product_name varchar
      (255) not null,
    product_description varchar
      (255), 
    product_category varchar
      (255) not null,
    product_subcategory varchar
      (255),
    product_brand varchar
      (255) not null,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    PRIMARY KEY
      (id)
    -- FOREIGN KEY
    --   (product_vendor_id) REFERENCES vendors
    --   (id)
);

      CREATE TABLE lists
      (
        id int
        AUTO_INCREMENT,
    list_name varchar
        (255) not null,
    list_user_id int,
    PRIMARY KEY
        (id)
    -- FOREIGN KEY
    --     (list_user_id) REFERENCES users
    --     (id)
 );


        CREATE TABLE list_products
        (
          id int
          AUTO_INCREMENT,
    product_id int,
    quantity_ordered int,
    list_id int, 
    PRIMARY KEY
          (id)
    -- FOREIGN KEY
    --       (product_id) REFERENCES products
    --       (id), 
    -- FOREIGN KEY
    --       (list_id) REFERENCES lists
    --       (id) 
 );


