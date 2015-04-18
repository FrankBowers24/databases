var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});
dbConnection.connect();


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("THE REQUEST BODY FOR MESSAGES"+JSON.stringify(req.body));
      res.send("completed respone to Messages");
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log("THE REQUEST BODY FOR USERS"+JSON.stringify(req.body));
      res.send("completed response to Users");
      dbConnection.query('INSERT INTO messages (username) VALUES (?)',[req.body.username],function(error, results,fields){
        console.log("INSIDE OF USERS AND",error, results,fields);
        if (error){throw error;}
      } );
    }
  }
};
