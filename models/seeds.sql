USE grocerybuddy;

INSERT INTO users
    (first_name, last_name, user_address_street, user_address_street2, user_address_city, user_address_state, user_address_zip, email, is_store, user_password)
VALUES
    ('Robert', 'Finkley', '12345 SW Anywhere St', '', 'Homestead', 'Fl', 33033, 'rob@publix.com', 1, '12345'),
    ('Trevor', 'Handley', '12345 SW Anywhere St', '', 'Orlando', 'Fl', 32789, 'tevor@walmart.com', 2, '12345'),
    ('Jonathan', 'Ruiz', '12345 SW Anywhere St', '', 'Orlando', 'Fl', 32789, 'jonathan@publix.com', 3, '12345');

INSERT INTO stores
    (name, address, city, state, zip, delivers, UserId)
VALUES
    ('Publix', '12345 SW Anywhere St', 'Homestead', 'Fl', 33033, 1, 1),
    ('Wal-Mart', '12345 SW Anywhere St', 'Orlando', 'Fl', 32789, 1, 2),
    ('Aldi', '12345 SW Anywhere St', 'Orlando', 'Fl', 32789, 3);

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



INSERT INTO storeinventory
    (name, price, StoreId)
VALUES
    ('Kelloggs Fruit Loops', '5.49', '1'),
    ('Kelloggs Fruit Loops', '6', '2'),
    ('Kelloggs Fruit Loops', '4.99', '3'),
    ('Kelloggs Frosted Flakes', '5.23', '1'),
    ('Kelloggs Frosted Flakes', '5.15', '2'),
    ('Kelloggs Frosted Flakes', '5.54', '3'),
    ('Cocoa Puffs Chocolate Cereal', '4.29', '1'),
    ('Cocoa Puffs Chocolate Cereal', '4.2', '2'),
    ('Cocoa Puffs Chocolate Cereal', '4.23', '3'),
    ('Cocoa Pebbles Cereal', '4.29', '1'),
    ('Cocoa Pebbles Cereal', '4.29', '2'),
    ('Cocoa Pebbles Cereal', '4.29', '3'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', '4.78', '1'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', '4.54', '1'),
    ('Kelloggs Nutri-Grain Soft Baked Apple Cinnamon Breakfast Bars 20.8 oz 16 Ct', '4.99', '1'),
    ('Hormel Natural Hardwood Smoke Original Bacon', '10.19', '1'),
    ('Hormel Natural Hardwood Smoke Original Bacon', '10', '2'),
    ('Hormel Natural Hardwood Smoke Original Bacon', '9.89', '3'),
    ('Oscar Mayer Bacon', '8.89', '1'),
    ('Oscar Mayer Bacon', '8.89', '2'),
    ('Oscar Mayer Bacon', '8.89', '3'),
    ('Banquet Maple Sausage Links', '2.59', '1'),
    ('Banquet Maple Sausage Links', '2.69', '2'),
    ('Banquet Maple Sausage Links', '2.49', '3'),
    ('No Evil Foods Plant Meat El Zapatista 1 ea BOX', '8.49', '1'),
    ('No Evil Foods Plant Meat El Zapatista 1 ea BOX', '8.59', '2'),
    ('No Evil Foods Plant Meat El Zapatista 1 ea BOX', '8.29', '3'),
    ('Natures Own Butterbread', '3.79', '1'),
    ('Natures Own Butterbread', '3.69', '2'),
    ('Natures Own Butterbread', '3.88', '3'),
    ('Sara Lee Artesano Bakery Bread', '3.99', '2'),
    ('Sara Lee Artesano Bakery Bread', '3.76', '3'),
    ('Pepperidge FarmÂ® Farmhouse Pepperidge Farm FarmhouseÂ® Hearty White Bread', '4.45', '1'),
    ('Pepperidge FarmÂ® Farmhouse Pepperidge Farm FarmhouseÂ® Hearty White Bread', '4.55', '2'),
    ('Pepperidge FarmÂ® Farmhouse Pepperidge Farm FarmhouseÂ® Hearty White Bread', '4.35', '3'),
    ('Chips Ahoy! Original Chocolate Chip Cookies', '3.79', '1'),
    ('Chips Ahoy! Original Chocolate Chip Cookies', '3.65', '2'),
    ('Chips Ahoy! Original Chocolate Chip Cookies', '3.75', '3'),
    ('Oreo Chocolate Sandwich Cookies Double Stuf', '3.35', '1'),
    ('Oreo Chocolate Sandwich Cookies Double Stuf', '3.3', '2'),
    ('Oreo Chocolate Sandwich Cookies Double Stuf', '3.29', '3'),
    ('Keebler E.L. Fudge Elfwich Cookies Original', '3.89', '1'),
    ('Keebler E.L. Fudge Elfwich Cookies Original', '3.99', '2'),
    ('Keebler E.L. Fudge Elfwich Cookies Original', '3.54', '3'),
    ('Pepperidge FarmÂ® MontaukÂ® Soft Baked Milk Chocolate Cookies', '4.29', '1'),
    ('Pepperidge FarmÂ® MontaukÂ® Soft Baked Milk Chocolate Cookies', '4.35', '2'),
    ('Pepperidge FarmÂ® MontaukÂ® Soft Baked Milk Chocolate Cookies', '4.99', '3'),
    ('Perdue Carved Chicken Breast Honey Roasted', '3.89', '1'),
    ('Perdue Carved Chicken Breast Honey Roasted', '3.79', '2'),
    ('Perdue Carved Chicken Breast Honey Roasted', '3.9', '3'),
    ('Bumble Bee Premium Chicken Breast with Rib Meat Chunk in Water', '2.09', '1'),
    ('Bumble Bee Premium Chicken Breast with Rib Meat Chunk in Water', '2.1', '2'),
    ('Bumble Bee Premium Chicken Breast with Rib Meat Chunk in Water', '2.07', '3'),
    ('Bumble Bee Premium Tuna in Water', '1.15', '1'),
    ('Bumble Bee Premium Tuna in Water', '1.25', '2'),
    ('Bumble Bee Premium Tuna in Water', '1.3', '3'),
    ('StarKist StarKist Chunk Light Tuna In Water', '1.15', '1'),
    ('StarKist StarKist Chunk Light Tuna In Water', '1.25', '2'),
    ('StarKist StarKist Chunk Light Tuna In Water', '1.3', '3');