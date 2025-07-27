const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/MyPracticeDB");
        console.log("DB connected")

        // await userModel.insertOne()

        console.log("Data updated successfully");
    } catch (error) {
        console.log("error", error)
    }
}

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
},{
    versionKey: false
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

module.exports = connectDB;