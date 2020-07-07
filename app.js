const express = require("express");


const path = require("path");
//express app
const app = express();

// const router = express.Router();
const PORT = process.env.PORT || 3000;


// Listening for requests
app.listen(PORT);


// set the views 
app.set("views", path.join(__dirname, "views"));
//set the view engine
app.set("view engine", "pug");
//index page
app.get("/", (req, res) => {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.render('home', {
    title: "Home",
  });
});

app.get("/portfolio", (req, res) =>{
res.render('portfolio',{
  title:"Portfolio",
});
});
//about WebPage
app.get("/about", (req, res) => {
  res.render('about', {
    title: "About Me",
  });
});
//404 page
app.use((req, res) => {
  res.status(404).render("404");
});

// module.exports = router