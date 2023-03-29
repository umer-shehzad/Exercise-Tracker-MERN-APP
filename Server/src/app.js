
const express = require("express");


require("./db/conn");
const Register = require("./models/register");
// we link the router file to make our route easy//
const router = require("./routes/api");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
// app.use(express.json());
app.use(router); // set the route for the api
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});