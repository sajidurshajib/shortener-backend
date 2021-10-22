const validate = (schema) => {
    return async (req, res, next) => {
        let result
        try {
            result = await schema.validateAsync(req.body)
        } catch (error) {
            res.json({ error })
        }

        req.body = result

        next()
    }
}

module.exports = validate
