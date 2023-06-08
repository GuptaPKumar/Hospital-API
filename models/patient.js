const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, " Plz enter patient name"],
        unique: true,

    },
    // for report i am creating arry for making object
    reports: [{
        status : {
            type: String,
            required: true,
            //  enum is for storing some paticular value
            enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admin"],

        },
        date:{
            type: Date,
            required:true,
        }
    },
],
doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required : true,
},

});

const Patient = new mongoose.model("Patient", patientSchema);
module.exports =Patient;