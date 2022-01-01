const express = require('express');
const recordController = require('../../controllers/record.controller');
const { validate } = require('../../middlewares');
const { recordValidation } = require('../../validations');

const router = express.Router();

router.route('/').post(recordValidation(), validate, recordController.getRecords);

module.exports = router;