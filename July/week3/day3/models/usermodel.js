const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: Date
    },
    phoneNumber: {
        type: String
    }

})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel