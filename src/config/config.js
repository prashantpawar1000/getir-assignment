const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL

module.exports = {
    port: PORT,
    mongoose: {
        url: MONGODB_URL,
    },
};