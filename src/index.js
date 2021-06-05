const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const db = require('./config/db')

const route = require('./routes/details')

//Connect DB
db.connect()

const PORT = process.env.PORT || 5000
const app = express()

// HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
    })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

/* app.get('/', function (req, res) {
    res.render('home')
}) */

// app.use(express.urlencoded({ extended: true }))
app.use('/', route)

//deploy
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`App listening at http://${PORT}`))
