const express = require('express');
// const faker = require('faker');
const productsService = require('../service/products');
const service = new productsService;

const router = express.Router();

router.get('/', (req,res) => {
  const products = service.find();
  res.json(products);
});

router.post('/', (req,res) => {
  const body = req.body;
  const create = service.create(body)
  res.status(201).json(create);
});

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product)
});

router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const update = service.update(id, body);
  res.json(update);
});

router.put('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const update = service.update(id, body);
  res.json(update);
});

router.delete('/:id', (req,res) => {
  const { id } = req.params;
  const deleted = service.delete(id);
  res.json(deleted);
});

module.exports = router;
