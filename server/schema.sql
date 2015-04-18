CREATE DATABASE chat;

USE chat;

-- INSERT INTO messages (username, messageText, createdAt, updatedAt) VALUES (?,?,?,?) /* [req.username, req.messageText ...];*/

CREATE TABLE messages (
  /* Describe your table here.*/
username VARCHAR(100),
messageText VARCHAR(100),
createdAt DATE,
updatedAt DATE,
objectId int(11) NOT NULL auto_increment,
PRIMARY KEY (objectId)
);

CREATE TABLE users (
  /* Describe your table here.*/
username VARCHAR(100),
PRIMARY KEY (username)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE TABLE users (username VARCHAR(100),PRIMARY KEY (username));
