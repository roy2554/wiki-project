const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use('/create', require('./create'))
router.use('/isexist', require('./isexist'))

module.exports = router