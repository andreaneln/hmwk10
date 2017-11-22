
/*
 * GET home page.
 */

exports.index = function(req, res){
  var user = req.user;
  res.render('index.html', { u: user, title: 'Cloudant Boiler Plate' });
};