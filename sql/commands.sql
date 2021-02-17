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