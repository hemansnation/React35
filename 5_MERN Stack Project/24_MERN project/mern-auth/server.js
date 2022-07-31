const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// middlewares
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(
    bodyParser.json()
);

// db config
const db = ""

// connect to mongoDB

mongoose.connect(
    db,
    {
        useNewUrlParser: true
    }
).then(() => {
    console.log("MongoDB Connected");
}).catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})