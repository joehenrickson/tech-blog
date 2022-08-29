const { User } = require('../models');

const userData = [
  {
    username: 'Joe',
    password: '1234',
  },
  {
    username: 'Jenny',
    password: '1234',
  },
  {
    username: 'Josh',
    password: '1234',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
