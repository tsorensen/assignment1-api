var request = require('superagent');
var host = 'http://whoismyrepresentative.com/';
var makeRequest = function(call, params, callback) {
  request
    .get(host + call)
    .query({output: 'json'})
    .query(params)
    .end(function(err, res) {
      if(err) { return callback(err); }
      try {
        callback(null, JSON.parse(res.text).results);
      } catch(e) {
        console.log('Error parsing results: ' + e);
      }
    });
};

exports.allByZip = function(zip, callback) {
  makeRequest('getall_mems.php', {zip: zip}, callback);
};

exports.repsByName = function(name, callback) {
  makeRequest('getall_reps_byname.php', {name: name}, callback);
};

exports.repsByState = function(state, callback) {
  makeRequest('getall_reps_bystate.php', {state: state}, callback);
};

exports.sensByName = function(name, callback) {
  makeRequest('getall_sens_byname.php', {name: name}, callback);
};

exports.sensByState = function(state, callback) {
  makeRequest('getall_sens_bystate.php', {state: state}, callback);
};
