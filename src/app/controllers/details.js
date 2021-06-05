const Movies = require('../models/Movies')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class Details {
    index(req, res, next) {
        Movies.find({}, function (err, details) {
            if (!err) {
                res.json(details)
                return
            }
            res.status(400).json({ error: 'ERROR!' })
        })
        /* .then((movie) => {
                res.render('home', {
                    movie: mutipleMongooseToObject(movie),
                })
            })
            .catch(next) */
    }

    detail(req, res, next) {
        Movies.findById(req.params.id)
            .then((movie) => res.json(movie))
            .catch(next)
    }
}

module.exports = new Details()
