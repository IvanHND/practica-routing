const express = require('express');

const productsRouter = require('./products.route');
const productsCategories = require('./categories.route');
const productsUsers = require('./users.route');

function routerApi (app) {
  const router = express.Router();
  app.use('/API/V1', router);
  router.use('/products', productsRouter);
  router.use('/categories', productsCategories);
  router.use('/users', productsUsers);
};

module.exports = routerApi;
