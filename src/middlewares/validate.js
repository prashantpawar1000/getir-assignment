const _ = require('lodash');
const { validationResult } = require('express-validator')
const { badrequest } = require('../responses');

module.exports = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty())
        return next()

    const extractedErrors = []
    _.map(errors.errors, err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(400).json(badrequest({ errors: extractedErrors }))
}