const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: {
        type:String, 
        default: "visitor"
    }
})

const UserModel = mongoose.model("users", mongoose.Schema)
model.exports = UserModel