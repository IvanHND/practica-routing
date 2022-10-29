const express = require('express');

const productsRouter = require('./products');
const productsCategories = require('./categories');
const productsUsers = require('./users');

function routerApi (app) {
  const router = express.Router();
  app.use('/API/V1', router);
  router.use('/products', productsRouter);
  router.use('/categories', productsCategories);
  router.use('/users', productsUsers);
};

module.exports = routerApi;
