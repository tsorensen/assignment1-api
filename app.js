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
  reps.repsByName(req.params.name, function(err, people) {
    if(err) { next(err); }
    res.json(people);
  });
});

app.get('/reps/by-state/:state', function(req, res, next) {
  reps.repsByState(req.params.state, function(err, people) {
    if(err) { next(err); }
    res.json(people);
  });
});

app.get('/sens/by-name/:name', function(req, res, next) {
  reps.sensByName(req.params.name, function(err, people) {
    if(err) { next(err); }
    res.json(people);
  });
});

app.get('/sens/by-state/:state', function(req, res, next) {
  reps.sensByState(req.params.state, function(err, people) {
    if(err) { next(err); }
    res.json(people);
  });
});

//error handling
app.use(function(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

module.exports = app;
