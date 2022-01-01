const express = require('express');
const router = express.Router();
const recordRoute = require('./record.route');

router.use('/records', recordRoute);

module.exports = router;