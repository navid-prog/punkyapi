const mongoose = require('mongoose')

const punkySchema = mongoose.Schema({
    wallet: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Punky', punkySchema)