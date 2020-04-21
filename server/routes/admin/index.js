module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Caregory = require('../../models/Category')

    router.post('/categories', async (req, res) => {
        const model =  await Caregory.create(req.body)
        res.send(model)
    })

    router.get('/categories', async (req, res) => {
        const items =  await Caregory.find().limit(10)
        res.send(items)
    })
    app.use('/admin/api', router)  
}