import express from 'express';
//express app
const app = express();

//Listening for requests
app.listen(3000);

app.get('/', (res, req) => {
    res.send("<p>Construction work in progress.</p>");
});