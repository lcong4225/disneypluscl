const express = require('express')
const router = express.Router()
const Details = require('../app/controllers/details')

router.get('/home', Details.index)
router.get('/detail/:id', Details.detail)

module.exports = router
