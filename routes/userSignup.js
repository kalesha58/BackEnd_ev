const  express=require("express");
const userSignupModel = require("../model/userSignup");
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    const userPresent=await userSignupModel.findOne({email});
    if(userPresent){
        res.send("Already Exists user")
    }else{
        try {
             bcrypt.hash(password,10,async function (err,hash){
                const user=new userSignupModel({name,email,password:hash,});
                await user.save()
             })
        } catch (error) {
            res.status(400).send({message:error})
        }
    }
    
})
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await userSignupModel.find({email});
        if(user.length>0){

            const hashed_Passsword=user[0].password
            bcrypt.compare(password,hashed_Passsword,function(err,result){
                if(result){
                    const token=jwt.sign({userID:user[0]._id},"hash");
                    res.send({meg:"LoginSuccess",token:token})
                }
            })
        }
    } catch (error) {
        console.
        res.status(400).send("login Faild")
        
    }

})
module.exports=router;