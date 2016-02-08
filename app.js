var reps = require('./lib/reps');

reps.allByZip('84043', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});
