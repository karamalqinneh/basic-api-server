const express = require("express");
const cors = require("cors");

// local modules
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/user");
const clothesRoutes = require("./routes/clothes");
const { User } = require("./models/index");
// console.log(User);

const app = express();
// Global Middlewares
app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(clothesRoutes);

const start = (port) => {
  app.listen(port, () => console.log(`Running on Port ${port}`));
};

app.use("/", (req, res) => {
  res.send("server is working");
});
app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
