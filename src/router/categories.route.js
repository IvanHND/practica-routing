const express = require('express');
const categoriesService = require('../service/categories.service');

const service = new categoriesService;
const router = express.Router();


router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const categorie = await service.findOne(id);
    res.json(categorie)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
