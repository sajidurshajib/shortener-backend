const Joi = require('joi')

exports.linkPostDto = async (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().min(3).max(70).required(),
        text: Joi.string().min(3).max(70).required(),
        link: Joi.string().min(3).max(70).required(),
    }).with('text', 'link')

    let result
    try {
        result = await schema.validateAsync(req.body)
    } catch (error) {
        res.json({ error })
    }

    req.body = result

    next()
}
