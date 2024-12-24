import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
    }
   
)
const Contactus=mongoose.model("Contactus",userSchema);
export default Contactus;