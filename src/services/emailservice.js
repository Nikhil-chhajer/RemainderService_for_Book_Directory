const sender=require('../config/emailconfig');
const sendBasicEmail=async (data)=>{
    try {console.log(data);
        const response=await sender.sendMail({
            from:data.From,
            to:data.To,
            subject:data.Subject,
            text:data.Content
        });
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=sendBasicEmail;