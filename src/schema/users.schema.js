const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const nickName = joi.string().min(3).max(30);
const email = joi.string().email();

const createUserSchema = joi.object({
  name: name.required(),
  nickName: nickName.required(),
  email: email.required()
});

const updateUserSchema = joi.object({
  name: name,
  nickName: nickName,
  email: email
});

const getUserSchema = joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };