// routes/about.js
module.exports = function(app) {
  app.get("/about/office", function (req, res) {
    res.render("about/office", { title: "The Office" });
    res.end();
  });

  app.get("/about/leaders", function (req, res) {
    res.render("about/leaders", { title: "Officers" });
    res.end();
  });

  app.get("/about/history", function(req, res) {
    res.render("about/history", {title: "History" });
    res.end();
  });
}
