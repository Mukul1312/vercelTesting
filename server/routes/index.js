const noteRoutes = require("./note_routes");
const salesRoutes = require("./sales");

module.exports = function (app, db) {
  noteRoutes(app, db);
  salesRoutes(app, db);
};
