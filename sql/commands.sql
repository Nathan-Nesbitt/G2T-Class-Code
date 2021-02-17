/* CREATE DATABASE */
CREATE DATABASE G2T;

/* show databases */
SHOW DATABASES;

/* use a database */
use G2T;

/* Create People Table */
CREATE TABLE people (
    SIN INT NOT NULL, /* SIN Number that is not null (you technically don't need not null because primary key handles that for you) */
    name VARCHAR(200), /* Variable size string name up to 200 characters */
    PRIMARY KEY(SIN) /* Sets the primary key */
);

/* Show tables */
SHOW TABLES;

/* Inserting people into database */

INSERT INTO people(SIN, name) VALUES (111111111, "Nathan");
INSERT INTO people(SIN, name) VALUES (123456789, "Onur");
INSERT INTO people(SIN, name) VALUES (111111112, "Nisa");
INSERT INTO people(SIN, name) VALUES (111111113, "Cai");
INSERT INTO people(SIN, name) VALUES (111111114, "Cai");
INSERT INTO people(SIN, name) VALUES (111111115, "Lucas");

/* View all of the people that we inserted into the table/database */
SELECT * FROM people;

/* Select all people with the name 'cai' */
SELECT * FROM people WHERE name = 'Cai';

/* Select the name of the person with the SIN 111111112 */
SELECT name FROM people WHERE SIN = 111111112;

/* Select all people whose names start with 'N' */
SELECT name, SIN FROM people WHERE name LIKE "N%";

/* Select all the people whose second last letter of their name is a */
SELECT name, SIN FROM people WHERE name LIKE "%a_";

/* Select all the people whose second letter of their name is n */
SELECT name, SIN FROM people WHERE name LIKE "_n%";

/* Select all the people whose first and last letter of their name is n */
SELECT name, SIN FROM people WHERE name LIKE "n%n";