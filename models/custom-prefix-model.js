const mongoose = require('mongoose')

const customPrefixSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        required: true
    }
})

const prefixModel = mongoose.model('custom-prefixes', customPrefixSchema)
module.exports = prefixModel