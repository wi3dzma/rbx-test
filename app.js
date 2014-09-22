var express = require('express')
  , http = require('http')
  , swig = require('swig') // http://paularmstrong.github.io/swig/docs/
  , path = require('path')
  , actions = require('./actions');

var app = express();

// enable swig template engine

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// all environments
app.set('http port', process.argv[2] || 3000);
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', actions.list);
app.get('/del', actions.del);
app.post('/add', actions.add);

http.createServer(app).listen(app.get('http port'), function(){
  console.log('Express server listening on port ' + app.get('http port'));
});
