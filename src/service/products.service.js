const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class productsService {
  constructor () {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      });
    };
  }
  async create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body
    };
    this.products.push(newProduct);
    return body;
  }
  async find() {
    return this.products;
  }
  async findOne(id) {
    const element = this.products.find(item => item.id === id);
    if (element === undefined) {
      throw boom.notFound('product not found');
    };
    return this.products.find(item => item.id === id);
  }
  async update(id, change) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    };
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    };
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = productsService;
