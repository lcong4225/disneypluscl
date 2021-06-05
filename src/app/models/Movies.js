const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movies = new Schema({
    cardImg: String,
    backgroundImg: String,
    subTitle: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Movies', Movies)
