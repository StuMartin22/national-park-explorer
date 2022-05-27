const db = require('../config/connection');
const { Constant } = require('../models');

const data = require('./data.json');

db.once('open', async () => {
  await Constant.deleteMany({});

  const whatOurStuffIs = await Constant.insertMany(data);

  console.log('data added!');
  process.exit(0);
});
