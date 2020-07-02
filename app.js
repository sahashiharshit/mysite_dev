const express = require('express');
//express app
const app = express();
const PORT = process.env.PORT || 3000;
//Listening for requests
app.listen(PORT);

app.get('/', (req, res) => {
    
    res.send("<p>Construction work in progress.</p>");
});