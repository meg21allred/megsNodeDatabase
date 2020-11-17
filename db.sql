CREATE TABLE records (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    birth_date VARCHAR(255)
)

INSERT INTO records (first_name, last_name, birth_date) VALUES (
    ('Megan'), ('Allred'), ('10/21/1983')
)
INSERT INTO records (first_name, last_name, birth_date) VALUES (
    ('Chris'), ('Allred'), ('07/13/1982')
)