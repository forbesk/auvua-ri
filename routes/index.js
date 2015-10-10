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
  res.render('index', {
    consts: consts,
    navblocks: [
      { name: 'Dashboard',
        href: '/dash',
        icon: 'glyphicon-send',
        description: 'Control the vehicle, view camera streams and telemetry, and run missions' },
      { name: 'Planner',
        href: '/plan',
        icon: 'glyphicon-random',
        description: 'Design and edit tasks and missions' },
      { name: 'Filters',
        href: '/filter',
        icon: 'glyphicon-eye-open',
        description: 'Create, modify, and test vision filter chains' },
      { name: 'Logging',
        href: '/log',
        icon: 'glyphicon-floppy-disk',
        description: 'View log files and analyze telemetry, mission events, and footage' }
    ]
  });
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
