const express = require('express')

const router = express.Router()

router
    .route('/')
    .get((req, res) => res.json({ msg: 'Link get route' }))
    .post((req, res) => res.json({ msg: 'Link post route' }))
router
    .route('/:id')
    .get((req, res) => res.json({ msg: 'Link id get route' }))
    .patch((req, res) => res.json({ msg: 'Link id patch route' }))
    .delete((req, res) => res.json({ msg: 'Link id delete route' }))

module.exports = router
