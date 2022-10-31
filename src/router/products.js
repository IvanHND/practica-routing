const express = require('express');
// const faker = require('faker');
const productsService = require('../service/products');
const validatorHandler = require('../midlleware/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schema/products');

const service = new productsService;

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const create = await service.create(body)
    res.status(201).json(create);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
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
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = await service.update(id, body);
  res.json(update);
});

router.put('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema,'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const update = await service.update(id, body);
    res.json(update);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
});

module.exports = router;
