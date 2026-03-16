// src/app.js
require('dotenv').config()
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { app: { cors: corsOrigin } } = require("./configs/config");
console.log("CORS_ORIGIN:", corsOrigin);
const app = express();
const corsOptions = {
  origin: corsOrigin,
  methods: "GET, POST, PUT, HEAD, PATCH, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use("/", require("./routes"));

module.exports = app;
