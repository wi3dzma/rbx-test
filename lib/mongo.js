var MongoClient = require('mongodb').MongoClient
    , format = require('util').format
    , connection;

MongoClient.connect('mongodb://127.0.0.1:27017/rbxtest', function(err, db) {
  if(err) throw err;
  connection = db;
});

exports.conn = connection;