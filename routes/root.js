// routes/root.js
module.exports = function(app) {
  app.get("/", function (req, res) {
    res.render("index", { title: "Home" });
    res.end();
  });

  app.get("/office", function (req, res) {
    res.render("office", { title: "The Office" });
    res.end();
  });

  app.get("/leaders", function (req, res) {
    res.render("leaders", { title: "Officers" });
    res.end();
  });

  app.get("/education", function (req, res) {
    res.render("education", { title: "Education" });
    res.end();
  });

  app.get("/licensing", function (req, res) {
    res.render("licensing", { title: "Licensing" });
    res.end();
  });

  app.get("/history", function(req, res) {
    res.render("history", {title: "History" });
    res.end();
  });

  app.get("/meetings", function(req, res) {
    res.render("meetings", {title: "Meetings" });
    res.end();
  });

  app.get("/calendar", function(req, res) {
    res.render("calendar", {title: "Meeting Calendar"});
    res.end();
  });
}
