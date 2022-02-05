const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    permission: Number,
    avatar: String,
    registerDate: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User