const express = require("express");
const passport = require("passport");
const {registerDoctor, createReport, all_reports, AllReports, login} = require('../controllers/userControllers');
const {registerPatient, home} = require('../controllers/userControllers');
const router = express.Router();
router.get('/', home);
router.post("/doctors/register", registerDoctor);
router.post("/login", login);

router.post("/patients/register", passport.authenticate('jwt', { session: false }), registerPatient);
router.post("/patients/:id/create_report", passport.authenticate('jwt', { session: false }), createReport);
router.get("/patients/:id/all_report", all_reports);
router.get("/reports/:status", AllReports);


module.exports = router;