const { Constant } = require('../models');

const resolvers = {
    Query: {
        ourThing: async () => {
           return await Constant.find({});
        }
    }
}

module.exports = resolvers;