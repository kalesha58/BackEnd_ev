const mongoose=require("mongoose");

const connectiondb=async()=>{
    await mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("DB")
    })
}
module.exports=connectiondb