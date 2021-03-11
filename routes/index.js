/*
 * GET home page.
 */
var data = require('../accounts.json');
exports.view = function(req, res){
  var account = {
    "username": req.query.username,
    "password" : req.query.password,
  }
  console.log(account);
  data['profiles'].push(account);
  res.render('index');
};

exports.viewAcount = function(req, res){
  res.render('AccountPlaceholder',data.profiles[data.profiles.length-1]);
};

