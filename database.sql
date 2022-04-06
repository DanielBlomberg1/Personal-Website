CREATE DATABASE myDB;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE click(
    click_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);