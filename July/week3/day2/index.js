const express=require("express");
const router = require("./routes/allRoutes");
const connectDB = require("./config/db");

const app = express();
const port = 8000;

connectDB()
app.use("/api",router);


app.listen(port, () => {
    console.log("Server is running on port", port);
})





















// This is middle of ware for validation
// const validation = (req, res, next) => {
//     console.log("Validation ho rha hai");
//     next();
// }

// const auth= (req, res, next) => {
//     console.log("Auth ho rha hai");
//     next()
// }



// router.get("/",validation,auth,(req, res) =>{
//     res.send("get method is called")
// })