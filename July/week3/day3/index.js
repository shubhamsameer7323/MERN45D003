const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

const app = express();


const port = process.env.port


app.get("/", (req, res) => {
    res.send("get method called")
})

app.listen(port,()=>{
    console.log("my server is running on port",port)
})