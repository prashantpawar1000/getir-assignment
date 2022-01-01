const { body } = require('express-validator')

module.exports = () => {
    return [
        body('startDate', 'startDate should be a valid date of format YYYY-MM-DD').optional().isDate(),
        body('endDate', 'endDate should be a valid date of format YYYY-MM-DD').optional().isDate(),
        body('maxCount', 'maxCount should be an integer').optional().toInt().isInt(),
        body('minCount', 'minCount should be an integer').optional().toInt().isInt()
    ]
};