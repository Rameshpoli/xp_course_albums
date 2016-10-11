var express = require('express');
var router = express.Router();
const db = require('../config/database')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('albums', { title: 'OMG Albums' });
});

router.get('/albums', function(request, response, next) {
  response.render('albumslist', { title: 'Albums' });
});
router.get('/albums/new', function(request, response, next) {
  response.render('newalbum', { title: 'New Album' });
});

router.post('/albums', function(request, response, next) {
  console.log(request.body)
  response.render('albumdetails', { album: {name:'Greatest Hits' , artist:'Queen'} });
});
module.exports = router;
