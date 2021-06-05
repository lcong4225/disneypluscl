const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/disneyplus_clone', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('Connect seccessfully!!!')
    } catch (error) {
        console.log('Connect fail!!!')
    }
}

module.exports = { connect }
