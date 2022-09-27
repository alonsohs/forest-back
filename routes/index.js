const express = require('express');

const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const patientsRouter = require('./patients.router')
const profileRouter = require('./profile.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/patients', patientsRouter)
  router.use('/profile', profileRouter)
}

module.exports = routerApi;
