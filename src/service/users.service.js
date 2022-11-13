const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class usersService {
  constructor () {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        nickName: faker.internet.userName(),
        email: faker.internet.email(),
        noCompras: faker.datatype.number({ max: 100 })
      })
    }
  }
  async create(body) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...body,
      noCompras: 0
    };
    this.users.push(newUser);
    return newUser;
  }
  async find() {
    return this.users;
  }
  async findOne(id) {
    const findUser = this.users.find(user => user.id === id);
    if (findUser == undefined) {
      throw boom.notFound('user not found');
    };
    return findUser;
  }
  async update(id, change) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw boom.notFound('user not found');
    };
    const product = this.users[userIndex];
    this.users[userIndex] = {
      ...product,
      ...change
    }
    return this.users[userIndex];
  }
  async delete(id) {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw boom.notFound('user not found');
    };
    this.users.splice(userIndex, 1);
    return { id };
  }
}

module.exports = usersService;
