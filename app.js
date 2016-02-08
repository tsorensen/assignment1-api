var reps = require('./lib/reps');

reps.allByZip('84606', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});

reps.repsByName('Smith', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});

reps.repsByState('UT', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});

reps.sensByName('Hatch', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});

reps.sensByState('UT', function(err, results) {
  if(err) {
    return console.log(err);
  }
  console.log(results);
});
