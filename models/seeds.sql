USE grocerybuddy;

INSERT INTO users
    (first_name, last_name, user_address_street, user_address_street2, user_address_city, user_address_state, user_address_zip, email, is_store, store_id, user_password)
VALUES
    ('Robert', 'Finkley', '12345 SW Anywhere St', '', 'Homestead', 'Fl', 33033, 'rob@publix.com', 0, 1, '12345'),
    ('Trevor', 'Handley', '12345 SW Anywhere St', '', 'Orlando', 'Fl', 32789, 'tevor@walmart.com', 0, 2, '12345'),
    ('Jonathan', 'Ruiz', '12345 SW Anywhere St', '', 'Orlando', 'Fl', 32789, 'jonathan@publix.com', 0, 3, '12345');

INSERT INTO store
    (name, address, city, state, zip, delivers)
VALUES
    ('Publix', '12345 SW Anywhere St', 'Homestead', 'Fl', 33033, 1),
    ('Wal-Mart', '12345 SW Anywhere St', 'Orlando', 'Fl', 32789, 1),
    ('Aldi', '12345 SW Anywhere St', 'Orlando', 'Fl', 32789, 0);

-- UPDATE users SET is_vendor = 1, vendor_id = 1 WHERE id = 1;
-- UPDATE users SET is_vendor = 1, vendor_id = 2 WHERE id = 2;
-- UPDATE users SET is_vendor = 1, vendor_id = 3 WHERE id = 3;

INSERT INTO products
    (name, category, brand)
VALUES
    ('Kelloggs Fruit Loops', 'Breakfast', 'Kelloggs'),
    ('Kelloggs Frosted Flakes', 'Breakfast', 'Kelloggs'),
    ('Cocoa Puffs Chocolate Cereal', 'Breakfast', 'General Mills'),
    ('Cocoa Pebbles Cereal', 'Breakfast', 'Post'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', 'Breakfast', 'Kelloggs'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', 'Breakfast', 'Kelloggs'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', 'Breakfast', 'Kelloggs'),
    ('Hormel Natural Hardwood Smoke Original Bacon', 'Meat', 'Hormel'),
    ('Oscar Mayer Bacon', 'Meat', 'Oscar Mayer'),
    ('Banquet Maple Sausage Links', 'Meat', 'Banquet'),
    ('No Evil Foods Plant Meat El Zapatista 1 ea BOX', 'Meat', 'No Evil'),
    ('Natures Own Butterbread', 'Bread', 'Natures Own'),
    ('Pepperidge FarmÃ‚Â® Farmhouse Pepperidge Farm FarmhouseÃ‚Â® Hearty White Bread', 'Bread', 'Pepperidge Farm'),
    ('Chips Ahoy! Original Chocolate Chip Cookies', 'Snacks', 'Chips Ahoy!'),
    ('Oreo Chocolate Sandwich Cookies Double Stuf', 'Snacks', 'Nabisco'),
    ('Keebler E.L. Fudge Elfwich Cookies Original', 'Snacks', 'Keebler'),
    ('Pepperidge FarmÃ‚Â® MontaukÃ‚Â® Soft Baked Milk Chocolate Cookies', 'Snacks', 'Pepperidge Farm'),
    ('Perdue Carved Chicken Breast Honey Roasted', 'Meat', 'Perdue'),
    ('Bumble Bee Premium Chicken Breast with Rib Meat Chunk in Water', 'Meat', 'Bumble Bee'),
    ('Bumble Bee Premium Tuna in Water', 'Meat', 'Bumble Bee'),
    ('StarKist StarKist Chunk Light Tuna In Water', 'Meat', 'StarKist');

