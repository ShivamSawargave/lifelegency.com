import Contactus from "../model/user.contact.js";



export const contact=async(req,res)=>{
    try{
        const {firstname,lastname,email,phonenumber,Message}=req.body;
        const contactus=await Contactus.findOne({})
        if(contactus){
            return res.status(400).json({message:"Your message already submited, I'll contact you as soon as"})
        }

        
        const createdUser= new Contactus({
            firstname:firstname,
            lastname:lastname,
            email:email,
            Message:Message,
            phonenumber:phonenumber
        })
        await createdUser.save()
        res.status(201).json({message:"contact you soon",contactus:{
            _id:createdUser._id,
            firstname:createdUser.firstname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

