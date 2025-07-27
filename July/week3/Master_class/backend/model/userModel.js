const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,

    },
    dob: {
        type: String,
    },
    phoneNumber: {
        type: String,
    }

},{
    timestamps:true,
    versionKey: false
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel