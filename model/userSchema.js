const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    taskname:String,
    status:Boolean,
    tag:String,
    userID:String,
})
const userModel=mongoose.model("userdata",userSchema)
module.exports=userModel