const express = require('express');
const userService = require('../service/users.service');
const validatorHandler = require('../midlleware/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schema/users.schema');


const service = new userService;
const router = express.Router();

router.get('/', async (req,res) => {
  const users = await service.find()
  res.json(users);
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const create = await service.create(body);
    res.status(201).json(create);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const update = await service.update(id, body);
      res.json(update);
    } catch (error) {
      next(error);
    }
});

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const update = await service.update(id, body);
      res.json(update);
    } catch (error) {
      next(error);
    }
  
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
});

module.exports = router;
