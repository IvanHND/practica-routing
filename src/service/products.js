const faker = require('faker');

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
      })
    }
  }
  create(body) {
    this.products.push(body);
    return body;
  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find(item => item.id === id);
  }
  update(id, change) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('element not found');
    };
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change
    };
    return this.products[index];
  }
  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('element not found');
    };
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = productsService;
