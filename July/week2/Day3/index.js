// how to create a server using express
const express = require("express");

const app=express();

const port=9000;

app.get("/",(req,res)=>{
    console.log("Request accepted");
    res.send("response Sended");
})

app.post("/user",(req,res)=>{
    res.send("post method called")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});



















// to import the package
// const http=require("http");
// const port=9000;




// // Server creation
// const myServer=http.createServer((req,res)=>{
//     console.log("request is accepted");
//     res.end("<h1>This is my Response</h1>")
// })

// // to run the server
// myServer.listen(port,()=>{
//     console.log("My server is running on port ",port)
// });