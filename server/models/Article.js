const mongoose = require('mongoose')

// 服务器接口
const schema = new mongoose.Schema({
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    title: { type: String },
    body: { type: String },
})

module.exports = mongoose.model('Article', schema)