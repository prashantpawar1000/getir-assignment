const _ = require("lodash");
const { ok } = require('../responses');
const { recordService } = require('../services');

const getRecords = async (req, res) => {
    const filter = _.pick(req.body, ['startDate', 'endDate', 'minCount', 'maxCount']);
    const result = await recordService.queryRecords(filter);
    res.send(ok({ records: [...result] }));
};

module.exports = {
    getRecords,
};