exports.list = function(req, res) {
  res.render('list', {nazwa: 'wartosc'});
}

exports.add = function(req, res) {
  res.send('add');
}

exports.del = function(req, res) {
  res.send('del');
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
