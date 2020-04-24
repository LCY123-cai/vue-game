const mongoose = require('mongoose')

// 服务器接口
const schema = new mongoose.Schema({
    username: { type: String },
    // 用户密码加密散列
    password: {
        type: String,
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    },
})

module.exports = mongoose.model('AdminUser', schema)