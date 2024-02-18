const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
var cors = require("cors");

const PORT = 3001;
const uri = "mongodb+srv://mukul1312:zHnPE0bXI15yzdg7@testing.6izewpb.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

require("./routes")(app, {});

app.listen(PORT, () => {
  console.log("We are live on " + PORT);
});
