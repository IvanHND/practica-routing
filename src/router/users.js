const express = require('express');
const userService = require('../service/users');

const service = new userService;
const router = express.Router();

router.get('/', async (req,res) => {
  const users = await service.find()
  res.json(users);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const create = await service.create(body);
  res.status(201).json(create);
});

router.get('/:id', async (req,res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = await service.update(id, body);
  res.json(update);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = await service.update(id, body);
  res.json(update);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
});

module.exports = router;
