// routes/root.js
module.exports = function(app) {
  app.get("/", function (req, res) {
    res.render("index", { title: "Home" });
    res.end();
  });

  app.get("/education", function (req, res) {
    res.render("education", { title: "Education" });
    res.end();
  });

  /*app.get("/licensing", function (req, res) {
    res.render("licensing", { title: "Licensing" });
    res.end();
  });*/
}
