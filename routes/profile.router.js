const express = require('express');
const passport = require('passport');

const PatientService = require('../services/patient.service')

const router = express.Router();

const patientService = new PatientService()

router.get('/me',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      let service = patientService
      const profile = await service.findByUserId(user.sub)
      res.json({
        user: profile
      })
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
