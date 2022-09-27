const Joi = require('joi')

const id = Joi.number().integer()
const curp = Joi.string().alphanum().min(18).max(18)
const name = Joi.string()
const fathers_lastname = Joi.string()
const mothers_lastname = Joi.string()
const date_of_birth = Joi.date().max('now')
const gender = Joi.string().valid('Masculino', 'Femenino', 'Otro')
const phone = Joi.string()
const isActive = Joi.boolean()
const rfId = Joi.string().alphanum()

const email = Joi.string().email()
const password =  Joi.string()


const createPatientSchema = Joi.object({
  name: name.required(),
  fathers_lastname: fathers_lastname.required(),
  mothers_lastname: mothers_lastname.required(),
  date_of_birth: date_of_birth.required(),
  gender: gender,
  phone,
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
})

const updatePatientSchema = Joi.object({
  name,
  fathers_lastname,
  mothers_lastname,
  date_of_birth,
  gender,
  phone,
  isActive
})

const getPatientSchema = Joi.object({
  id: id.required(),
})

module.exports = { createPatientSchema, updatePatientSchema, getPatientSchema }
