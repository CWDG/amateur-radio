var express        = require('express');
var app            = express();
var winston        = require('winston');
var expressWinston = require('express-winston');
var methodOverride = require('method-override');

// Set up body parsing and method overrides
app.use(methodOverride());

// Set up winston for logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
//  expressFormat: true,
//  colorStatus: true,
}));

// Start error logging
app.use(expressWinston.errorLogger({
	transports: [
		new winston.transports.Console({
			json: true,
			colorize: true
		})
	],
}));

// Set the rendering engine (jade)
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Route special pages (robots, humans)
app.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send("User-agent: *");
  res.end();
});

app.get('/humans.txt', function(req, res) {
  res.type('text/plain');
  res.send("/* SITE */\n\tStandards: HTML5, CSS5");
  res.end();
});

// Begin main routing functions
app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
	res.end();
})

// Start the server
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
