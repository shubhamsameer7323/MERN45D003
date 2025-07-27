const userModel= require ("../model/userModel")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken");
exports.Register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, dob } = req.body;
        if (!fullName || !email || !password) {
            return res.send({
                status: false, message: " please fill all the fields"
            })
        }
        const existUser = await userModel.findOne({ email })

        if (existUser) {
            return res.send({ status: false, message: " already user exist" })
        }
        bcrypt.hash(password, 9, async function (err, hash) {

            if(err){
                return res.send({status:false,message:"error on bcrypt"})
                
            }
            // Store hash in your password DB.
            const user = new userModel({
                fullName,
                email,
                password: hash,
                phoneNumber,
            })

            const result = await user.save();
            return res.send({
                status:true,
                message:"Register successful",
                user:result,
            })
        });

    } catch (err) {
        return res.send({ status: false, message: "Registration failed" })
    }
};


exports.Login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        if (!email || !password){
            return res.send({status:false,message:"please fill all the fields"})
        }

        const user=await userModel.findOne({email});

        if (!user){
            return res.send({status:false,message:"User Not Found"})
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(err){
                return res.send({ status:false, message: "Error on bcrypt"});
            }
            const secret=process.env.jwt_secret;
            const token=jwt.sign({user},secret, { expiresIn: '1h' });

            return res.send({status:true, message:"Sucessfully LOgin",user,token});

        });


    } catch (error) {
        console.log("Error is ", error);
        res.send({status:false, message:"Something is Error", error })
    }
}


exports.GetAllUser=async (req,res)=>{
    try {
        const users=await userModel.find();
        if(!users) {
            return res.send ({ status:false , message:"No User"})
        }
        else{
            return res.send({ status:true,message:"user found",users})
        }
    } catch (error) {
        console.log("Error is",error);
        res.send({status:false,message:"something is error",error})
    }
}