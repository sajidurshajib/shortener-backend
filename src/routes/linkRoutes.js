const express = require('express')
const linkController = require('../controllers/linkControllers')
const { postSchema } = require('../dto/linkDto')
const validate = require('../middleware/validation')

const router = express.Router()

router.param('id', (req, res, next, val) => {
    console.log(val)
    next()
})

router
    .route('/')
    .get(linkController.allLink)
    .post(validate(postSchema), linkController.postLink)
router
    .route('/:id')
    .get((req, res) => res.json({ msg: 'Link id get route' }))
    .patch((req, res) => res.json({ msg: 'Link id patch route' }))
    .delete((req, res) => res.json({ msg: 'Link id delete route' }))

router.route('/:id').get((req, res, next) => {
    console.log(req.params.id)
    res.end()
})

module.exports = router
