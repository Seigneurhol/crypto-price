import express from "express";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const MongoClient = require("mongodb").MongoClient;

import routes from "./routes/index";

import cors from "cors";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", routes);

MongoClient.connect("mongodb://localhost:27017", {
  useNewUrlParser: true
})
  .then(client => {
    const db = client.db("test");
    const collection = db.collection("crypto");
    app.locals.db = db;
    app.locals.collection = collection;
  })
  .catch(error => {
    console.log(error);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

// listen for the signal interruption (ctrl-c)
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});

export default app;
