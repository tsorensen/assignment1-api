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
  }

  if(method) {
    method(req.query.search, function(err, people) {
      if(err) { return next(err); }
      res.render('index', {
        reps: people,
      });
    });
  } else {
    res.render('index');
  }
});

//error handling
// app.use(function(err, req, res, next) {
//   res.status(500);
//   res.render('error', { error: err });
// });

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
