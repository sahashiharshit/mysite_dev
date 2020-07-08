const express = require("express");


const path = require("path");
//express app
const app = express();

// const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname +"/dist"));
app.use(express.static(__dirname +"/assets"));
// Listening for requests
app.listen(PORT);

// set the views 
app.set("views", path.join(__dirname, "views"));
//set the view engine
app.set("view engine", "pug");
//index page
app.get("/", (req, res) => {
  // res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.render('home', {
    title: "Home",
  });
});


// module.exports = router