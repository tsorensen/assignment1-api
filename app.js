'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;

//routes
const reps = require('./lib/reps');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view cache', false);

app.get('/', function(req, res, next) {
  var method;

  if(req.query.group === 'all') {
    method = reps.allByZip;
  } else if(req.query.group === 'reps' && req.query.type === 'name') {
    method = reps.repsByName;
  } else if(req.query.group === 'reps' && req.query.type === 'state') {
    method = reps.repsByState;
  } else if(req.query.group === 'sens' && req.query.type === 'name') {
    method = reps.sensByName;
  } else if(req.query.group === 'sens' && req.query.type === 'state') {
    method = reps.sensByState;
  } else {
    method = function(param, callback) { callback(null, []); };
  }

  method(req.query.search, function(err, people) {
    if(err) { return next(err); }
    res.render('index', {
      reps: people,
      query: req.query,
    });
  });

});


app.get('/all/by-zip/:zip', function(req, res, next) {
  reps.allByZip(req.params.zip, function(err, people) {
    if(err) { next(err); }
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

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
