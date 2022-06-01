const db = require('../config/connection');
const { User } = require('../models');

const data = require('./data.json');

db.once('open', async () => {
  try {
  await User.deleteMany({});
  const User = await User.insertMany(data);

  console.log('data added!');
  process.exit(0);
  }
  catch (err) {
    throw err;
  }
});
