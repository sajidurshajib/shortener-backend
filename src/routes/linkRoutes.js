const express = require('express')

const router = express.Router()

router.param('id', (req, res, next, val) => {
    console.log(val)
    next()
})

router
    .route('/')
    .get((req, res) => res.json({ msg: 'Link route' }))

router.route('/:id').get((req, res, next) => {
    console.log(req.params.id)
    res.end()
})

module.exports = router
