const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Plz Enter Your Name"],
    },
    password: {
        type: String,
        required: [true, "Plz Enter your Password"],
        minLength: [6, "Password should be greater then 6 charectors"],

    },

});

const Doctor = new mongoose.model("Doctor", doctorSchema);




module.exports = Doctor;