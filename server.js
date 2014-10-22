var express        = require("express");
var app            = express();
var winston        = require("winston");
var expressWinston = require("express-winston");

// Set up error handling function
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something blew up!" });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
}

// I like my generated HTML pretty so I can see where I made mistakes in
// templating
app.use(function(req, res, next) {
  app.locals.pretty = true;
  next();
});

// Set up winston for logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{res.statusCode}} FROM {{req.connection.remoteAddress}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
  exitOnError: false
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

// Set up error handling
app.use(clientErrorHandler);
app.use(errorHandler);

// Set the rendering engine (jade)
app.engine("jade", require("jade").__express);
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

// Set up static asset directories
app.use(express.static(__dirname + "/public"));

// Route special pages (robots, humans)
app.get("/robots.txt", function(req, res) {
  res.type("text/plain");
  res.send("User-agent: *");
  res.end();
});

app.get("/humans.txt", function(req, res) {
  res.type("text/plain");
  res.send("/* SITE */\n\tStandards: HTML5, CSS5");
  res.end();
});

// Begin main routing functions
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
  res.end();
});

// Handle 404 errors
app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url, title: "Page Not Found"});
    return;
  }
  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }
  // default to plain-text. send()
  res.type("txt").send("Not found");
});

// Start the server
var server = app.listen(3000, function() {
	console.log("Listening on port %d", server.address().port);
});
