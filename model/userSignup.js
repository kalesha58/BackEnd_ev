const mongoose=require("mongoose");

const userSignup=mongoose.Schema({
    name:String,
    email:String,
    password:String,
   
})
const userSignupModel=mongoose.model("usersignup",userSignup)
module.exports=userSignupModel