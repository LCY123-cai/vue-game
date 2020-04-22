const mongoose = require('mongoose')

// 服务器接口
const schema = new mongoose.Schema({
    name: { type: String },
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})


module.exports = mongoose.model('Category', schema)