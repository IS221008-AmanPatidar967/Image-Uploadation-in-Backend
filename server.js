const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./db")



const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;



//Import the router
 const studentRoutes = require('./routes/studentRoutes');


// use router
app.use('/student' ,studentRoutes);


app.listen(PORT, () => {
    console.log("Server is live ");
  });
  