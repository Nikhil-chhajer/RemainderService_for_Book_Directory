const axios=require('axios');
const sendBasicEmail=require('./emailservice');
const EmailReminder=async()=>{
    try {
        const users=await axios.get('http://localhost:3001/api/v1/allusers');
        let response=users.data.data;
        console.log(response.length);
        for (let i = 0; i < response.length; i++) { 
            let userEmail = response[i].email;
            sendBasicEmail({
                From:"movie.mela80@gmail.com",
                To:userEmail,
                Subject:"Book updated",
                Content:"A new book has been added to our Directory",
            })

        }
   
     } catch (error) {
        console.log(error);        
    }
}
module.exports=EmailReminder;
