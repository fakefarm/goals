var express = require('express')
  , http    = require('http');

var airports = require('./data/airports.json');
var flights  = require('./data/flights.json');
var reservations = [];

for (var i = 0; i < flights.length; i++) {
  flights[i].originFullName      = airports[flights[i].origin].name;
  flights[i].destinationFullName = airports[flights[i].destination].name;
}

function getMatchingFlights (data) {
  return flights.filter(function (item) {
    return (item.origin === data.origin) &&
      (item.destination === data.destination);
  });
}

/* TIP export your `app` by setting it as the export
 *  value, so that you can require it elsewhere –
 *  like in the REPL or if you wanted to embed one
 *  app in another app.
 */
var app = module.exports = express();
/* Then we can start configuring the Express app below: */

/* TIP add logging to your dev env. We are adding
 *   it before any other middleware in this case.
 */
if ('development' === app.get('env')) {
  app.use(express.logger('dev'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

app.use(express.bodyParser());

/* Set a view engine. `EJS` is similar to ERB in Rails:
 *   https://github.com/visionmedia/ejs
 * I chose this engine because it was easier to move your HTML index file
 * into the `views` folder, change the extension, and work immediately.
 * I usually use `Jade`, which is similar to Slim/Haml:
 *   https://github.com/visionmedia/jade
 */
app.set('view engine', 'ejs');

/* TIP the `router` was being called implicitly for you previously,
 *   when you declared your first `.get()` or `.post()`, etc. The order
 *   is important. I've read that it's better to explicity call it
 *   so that you have more control. For example, I've read that it's
 *   best to add it before your static file handler, otherwise it will
 *   supposedly check the disk for static files for each request before
 *   checking the routes.
 */
app.use(app.router);
app.use(express.static('public'));

// routes

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/airports', function (req, res) {
  res.json(airports);
});

app.get('/airports/:airport', function (req, res) {
  if (typeof airports[req.params.airport] === 'undefined') {
    res.json(404, {status: 'not found - invalid airport code'});
  } else {
    res.json(airports[req.params.airport]);
  }
});

app.get('/flights', function (req, res) {
  res.json(flights);
});

app.get('/flights/:origin', function (req, res) {
  var with_origin = flights.filter(function (item) {
    return item.origin === req.params.origin;
  });

  res.json(with_origin);
});

app.get('/flights/:origin/:destination', function (req, res) {
  var matches = getMatchingFlights(req.params);

  res.json(matches);
});

app.get('/reservations', function (req, res) {
  res.json(reservations);
});

app.post('/reservations', function (req, res) {
  var matches = getMatchingFlights(req.body);

  if (matches.length) {
    reservations.push(matches[0]);
    res.json(matches[0]);
  } else {
    res.status(404).end();
  }
});

// start app
http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});
