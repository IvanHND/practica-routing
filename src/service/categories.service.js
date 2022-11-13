const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class categoriesService {
  constructor () {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department()
      });
    };
  }
  async find() {
    return this.categories;
  }
  async findOne(id) {
    const element = this.categories.find(item => item.id === id);
    if (element === undefined) {
      throw boom.notFound('categories not found');
    };
    return this.categories.find(item => item.id === id);
  }
}

module.exports = categoriesService;
