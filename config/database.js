const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.error(
    "error",
    console.error.bind(console, "error in connecting with mongodb")
);

db.once("open", () =>{
    console.log("succesfully connecting with mongodb");
});

module.exports = db;
