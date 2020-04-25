module.exports = options => {
    return async (req, res, next) => {
        // 转换类名
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}