const express = require("express");
const cors = require("cors");
// local modules
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/user");

const app = express();

// Global Middlewares
app.use(express.json()); // access the body
app.use(cors()); //install the package
app.use(logger);
app.use(userRoutes);

const start = (port) => {
  app.listen(port, () => console.log(`Running on Port ${port}`));
};

app.use("/", (req, res) => {
  res.send("server s working");
});

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
