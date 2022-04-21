const express = require('express')
const router = express.Router()
const { getPunky, getcyberPunky, getspacePunky, getlegendaryPunky } = require('../controllers/punkyController')

router.get('/punky/:id', getPunky)
router.get('/cyberpunky/:id', getcyberPunky)
router.get('/spacepunky/:id', getspacePunky)
router.get('/legendarypunky/:id', getlegendaryPunky)

module.exports = router