const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const jwt = require("jsonwebtoken");

// Home controller
module.exports.home = function (req, res) {
    return res.end('<h1> Expess is up and running</h1>')
  };
// Doctor controller
module.exports.registerDoctor = async (req, res, next) =>{
    try {
        const doctor = await Doctor.create(req.body);
        res.status(200).json({
            success: true,
            message: "doctor created successfully",

        });

    }catch (error){
        res.status(500).json({
            success: false,
            message: "could not create a doctor, internal server error",
        });
    }
};
// Login controller
module.exports.login = async (req, res, next) =>{
    try {
        const user = await Doctor.find(req.body);
        if(user){
            const token = jwt.sign(user.id, "secret");
            res.status(200).json({
                success: true,
                token
    
            });

        }else{
            res.status(400).json({
                success: false,
                message: "User name or Password do not match",

            });
        }


        

    }catch (error){
        res.status(500).json({
            success: false,
            message: "Somthing went wrong",
        });
    }
};
// this is for Patient
module.exports.registerPatient = async (req, res, next) => {
    try {
        req.body.doctor = "123"
        const patient = await Patient.create(req.body);

        res.status(200).json({
            success: true,
            message: "succesflly created a patient"            
        })
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "could not create a patient,internal server error",
        });
    }

};


// this controoler for creat reports
module.exports.createReport = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        req.body.date = Date.now();
        patient.reports.push(req.body); 
        patient.save();

        res.status(200).json({
            success: true,
            message: "Report has submited succesflly "            
        })
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "could not create Report,internal server error",
        });
    }

};
// this is for all reports
module.exports.all_reports = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
       
            res.status(200).json({
            success: true,
            reports: patient.reports ,        
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "could not able to fetch the patient Report",
        });
    }

};
//  All reports
module.exports.AllReports = async (req, res, next) => {
    try {
        const patient = await Patient.find({
            reports: {$elemMatch:{statue: req.params.status}},
        });
       
            res.status(200).json({
            success: true,
            data: patient ,        
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "could not able to fetch the Report",
        });
    }

}