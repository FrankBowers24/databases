/* CREATE DATABASE chat; */

USE chat;

/* INSERT INTO messages (username, messageText, createdAt, updatedAt) VALUES (?,?,?,?) /* [req.username, req.messageText ...];*/

DROP TABLE messages;
DROP TABLE users;

/* INCLUDE ROOM */
CREATE TABLE messages (
  /* Describe your table here.*/
id int(11) NOT NULL auto_increment,
PRIMARY KEY (id),
username VARCHAR(100),
messageText VARCHAR(100),
roomname VARCHAR(100),
createdAt DATE,
updatedAt DATE
);

CREATE TABLE users (
  /* Describe your table here.*/
username VARCHAR(100),
PRIMARY KEY (username)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.


INSERT INTO messages (username, messageText, createdAt, updatedAt) VALUES ('john','this is a test','2015-12-30','2000-01-20') ;

INSERT INTO users (username) VALUES ('john');
*/
