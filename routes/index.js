var express = require('express');
var router = express.Router();
var consts = {
  title: 'AUVUA-RI',
  sheets: [
    '/bootstrap/css/bootstrap.css',
    '/stylesheets/style.css'],
  scripts: [
  '/bootstrap/js/bootstrap.js'],
  navlinks: [
    { name: 'Dashboard', href: '/dash'},
    { name: 'Planner', href: '/plan'},
    { name: 'Filters', href: '/filter'},
    { name: 'Logging', href: '/log'}]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {consts: consts});
});

router.get('/dash', function(req, res, next) {
  res.render('dash', {consts: consts});
});

router.get('/plan', function(req, res, next) {
  res.render('plan', { });
});

router.get('/filter', function(req, res, next) {
  res.render('filter', { });
});

router.get('/log', function(req, res, next) {
  res.render('log', { });
});

module.exports = router;
