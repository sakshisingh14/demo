const express = require("express");
const app = express();



app.get("/", function (req, res) {
    console.log("hello");
  });
  
  app.listen(3000, () => {
    console.log(`Server running at: http://localhost:${3000}`);
  });
  