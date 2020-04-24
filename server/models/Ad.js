const mongoose = require('mongoose')

// 服务器接口
const schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        image: {type: String},
        url: {type: String},
    }]
})

module.exports = mongoose.model('Ad', schema)