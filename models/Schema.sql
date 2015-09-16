-- Schema instantiaion script.
-- def dont run server side....
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    phone_number int
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    name text,
    list_id int,
    stack_order int,
    complete BOOLEAN,
    current BOOLEAN
);

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    phone_number int
);

CREATE TABLE hash_tags (
    id SERIAL PRIMARY KEY,
    name text
);

CREATE TABLE hash_and_todos (
    id SERIAL PRIMARY KEY,
    hash_id int,
    todo_id int
);

CREATE TABLE list_and_user (
    id SERIAL PRIMARY KEY,
    list_id int,
    user_id int
);




