const express=require("express");


const app=express();
const router=express.Router();

app.use(express.json())

const port=8000;

app.use("/api",router)

router.get("/",(req,res)=>{
    res.send("router get method called");
})

router.post("/user",(req,res)=>{
    res.send("router post method called");
})

router.put("/user/:id",(req,res)=>{
    const {id}=req.params;
    res.send(`id is :${id}`)
})

router.delete("/user/:id",(req,res)=>{
    const {id}=req.params;

    res.send(`delete method called id :${id}`)
})


















// app.get("/",(req,res)=>{
//     const obj=req.query;
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.email);
//     res.send("get method called");
// })

// app.post("/user",(req,res)=>{
//     // const userobj=req.body;
//     // console.log(userobj)

//     const {name,age,email,password}=req.body;
//     console.log(name,age,email,password)
//     res.send("post method called")
// })

// app.put("/user/:id",(req,res)=>{
//     const {id}=req.params;
//     res.send(`id is :${id}`)
// })

// app.delete("/user/:id",(req,res)=>{
//     const {id}=req.params;

//     res.send(`delete method called id :${id}`)
// })

app.listen(port,()=>{
    console.log("My server is running on the port",port);
})