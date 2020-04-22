const mongoose = require('mongoose')

// 服务器接口
const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
})


module.exports = mongoose.model('Item', schema)