"use strict";

const logger = (req, res, next) => {
  console.log("----- From logger------");
  console.log(req.method, req.originalUrl);
  next();
};

module.exports = logger;
