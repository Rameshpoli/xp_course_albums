'use strict'

const monk = require('monk')

const db = monk('localhost/albums_dev')


module.exports = db
