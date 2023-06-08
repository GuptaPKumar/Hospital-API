const express = require('express');
//  we r using body-parser for post request
const bodyparser = require("body-parser");

const db = require("./config/database");

const passport = require("passport");
const passportstratergy = require("./config/passport");

const router = require('./routes/router');

const app = express();
const PORT = 8000;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use(router);

app.listen(PORT,(err)=>{
    if(err){
        console.log(`Server is giving an error: ${err}`);
    } else{
        console.log(`Server is running on port: ${PORT}`);
    }
});
