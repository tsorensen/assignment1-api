var request = require('superagent');
var host = 'http://whoismyrepresentative.com/';

exports.allByZip = function(zipcode, res) {
  console.log(host + 'getall_mems.php');
  request
    .get(host + 'getall_mems.php')
    .query({ zip: zipcode, output: 'json' })
    .end(function(err, res) {
      if(err) {
        console.log(err);
      } else {
        console.log(res.text);
        return res.text;
      }
    });
};

exports.repsByName = function(req, res, next) {

};

exports.repsByState = function(req, res, next) {

};

exports.sensByName = function(req, res, next) {

};

exports.sensByState = function(req, res, next) {

};
