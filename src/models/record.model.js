const mongoose = require('mongoose');

const recordSchema = mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Date,
            required: true,
            trim: true,
        },
        counts: [
            {
                type: Number,
            },
        ],
    }
);

/**
 * @typedef Record
 */
const Record = mongoose.model('Record', recordSchema);

module.exports = Record;