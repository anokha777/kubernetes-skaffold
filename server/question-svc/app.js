const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const router = require("./route");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require('./config/config');

const app = express();
dotenv.config({ path: "./config.env" });

// MIDDLEWARES
app.use(bodyParser.json());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// const connectionString = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );
const connectionString = process.env.DATABASE;

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("question-svc - DB connection successful!"))
  .catch(error => console.log(`question-svc - error occured while connection to db${error}`));

app.use(router);

const port = 8080;
app.listen(port, () => {
  console.log(`question-svc running on port ${port}...`);
});

app.listen();
