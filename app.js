var express = require('express');
var app = express();
var reps = require('./lib/reps');

app.get('/all/by-zip/:zip', function(req, res, next) {
  reps.allByZip(req.params.zip, function(err, people) {
    if(err) { return next(err); }
    res.json(people);
  });
});

app.get('/reps/by-name/:name', function(req, res, next) {

});

app.get('/reps/by-state/:state', function(req, res, next) {

});

app.get('/sens/by-name/:name', function(req, res, next) {

});

app.get('/reps/by-state/:state', function(req, res, next) {

});

app.use(err, function(req, res, next) {
  //error handling
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

module.exports = app;
