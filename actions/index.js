var mg =require('../lib/mongo'),
    mongo = require('mongodb');

exports.list = function(req, res) {
  var users = mg.users();

  users.find().toArray(function(err, d) {
    d.map(function(v) {
      v.id = v._id.toString();

      return v;
    });

    res.render('list', {data: d});
  });

}

exports.add = function(req, res) {
  var users = mg.users();

  users.insert({
    imie: req.body.imie, 
    nazwisko: req.body.nazwisko,
    email: req.body.email,
    pass: req.body.pass
  }, function(err, docs) {
    if (err) {
      res.send('Nie mozna bylo dodac wiersza (' + err + ')');
    } else {
      res.send('dodano');
    }
  });
}

exports.del = function(req, res) {
  var users = mg.users();

  users.remove({ _id: new mongo.ObjectID(req.query.id) }, function(a, b) {
    res.send('Skasowano');
  });
}

/*
  var collection = db.collection('rbx_collection');
    collection.insert({a:2}, function(err, docs) {

      collection.count(function(err, count) {
        console.log(format("count = %s", count));
      });

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
      });
    });a
*/
