/*
Messenger Router file for messenger related request

*/
const express = require('express');
const router = express.Router();
const messengerService = require('../services/chatbotMessagingService');

router.post('/sendmessage', (req,res)=>{    
    var botResponse, status=200;
    if (req.body){
        if (req.body.userMessage){
            const userInput = req.body.userMessage
            console.log("Messenger log: Input is "+ userInput);
            status=200;
            messengerService.sendMessage(userInput).then(botResponse=>{
                console.log("SERVER RESPONSE")
                console.log(botResponse)
                res.status(status).send("BOT SERVER: "+ botResponse);
            })           
        }
        else {
            console.log("NO USER INPUT FOUND");
            status = 400;
        }
    }
    
})
module.exports = router;