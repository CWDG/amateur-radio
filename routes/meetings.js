// routes/root.js
module.exports = function(app) {
  app.get("/meetings", function(req, res) {
    res.render("meetings/meetings", {title: "Meetings" });
    res.end();
  });

  app.get("/meetings/calendar", function(req, res) {
    res.render("meetings/calendar", {title: "Meeting Calendar"});
    res.end();
  });
}
