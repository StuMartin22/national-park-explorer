const router = require('express').Router();
const constant1 = require('./routename1');
const constant2 = require('./routename2.js.js');

router.use('/route1', constant1);
router.use('/route2', constant2);

module.exports = router;