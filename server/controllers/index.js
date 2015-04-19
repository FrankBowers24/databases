var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});
dbConnection.connect();

var User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true }
});

var Message = sequelize.define('Message', {
  username: Sequelize.STRING(100),
  messageText: Sequelize.STRING(100),
  roomname: Sequelize.STRING(100)
});

Message.sync().success(function() {
  console.log("message table created");
});

User.sync().success(function() {
  console.log("user table created");
});


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("GET REQUEST MESSAGES: ", req.url);
      Message.findAll().complete(function(error, results) {
        if (error)
          console.log("error getting messages: " + error);
        console.log( "GET MESSAGES RESULTS: " + JSON.stringify(results));
        res.json(results);
      })

      /*dbConnection.query('SELECT * FROM messages;', function(error, results, fields) {
        console.log("GET MESSAGES QUERY RESULTS: ", error, results);
          res.send(results);
      })*/

    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log("THE REQUEST BODY FOR MESSAGES"+JSON.stringify(req.body));
      res.send("completed response to Messages");
      console.log("Request.body looks like", JSON.stringify(req.body));
      Message.create(req.body)
      .success(function(msg) {
        console.log("Message created successfully: " + msg);
      })
      .error(function(error) {
         console.log("Message create error: " + error);
      });
      /*dbConnection.query('INSERT INTO messages SET ?',req.body,function(error, results,fields){
        // console.log("INSIDE OF USERS AND",error, results,fields);
        if (error){throw error;}
      } );*/
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("GET REQUEST USERS: ", req.url);
      User.find(req.body.username).complete(function(error, result) {
        res.send(result);
      })
    },
    post: function (req, res) {
      console.log("THE REQUEST BODY FOR USERS"+JSON.stringify(req.body));
      res.send("completed response to Users");
      dbConnection.query('INSERT INTO users (username) VALUES (?)',[req.body.username],function(error, results,fields){
        // console.log("INSIDE OF USERS AND",error, results,fields);
        if (error){throw error;}
      } );
    }
  }
};
