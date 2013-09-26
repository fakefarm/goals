var express = require('express')
  , http    = require('http');

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

/* TIP port 3000 should be our fallback only (dev, test environments).
 *   For Heroku, you will want to grab the port from an environment variable.
 *   `app.set('custom-name')` sets custom data to the app, which you can
 *   retrieve later with `app.get('custom-name')`. We will use this when we
 *   create our server.
 */
app.set('port', process.env.PORT || 3000);

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
require('./config/routes')(app);

/* start server:
 * We are using our port number that we set earlier in the file with our
 * `app.set('port', ...)` assignment. You had this hard-coded as 3000 before.
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
