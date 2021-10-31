const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
//function to seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
//waits for sequelize sync
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
//bulk creates entries in the User table using json objects stored in userData.json.
//We know it will implement the create hook because we set individual hooks to true
  process.exit(0);
};

seedDatabase();
