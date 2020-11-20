/*
Messenger Router file for messenger related request

*/
const express = require('express');
const router = express.Router();
const messengerService = require('../services/chatbotMessagingService');

router.post('/sendmessage', (req, res) => {
    var status = 200;
    if (req.body) {
        if (req.body.userMessage) {
            const userInput = req.body.userMessage
            console.log("Messenger log: Input is " + userInput);
            function test(){
                return new Promise(function(resolve,reject) {
                    messengerService.sendMessage(userInput, function(err, data){
                        if (err){
                            console.log(err);
                            reject(err);
                        }
                        else {
                            return res.status(status).send("" + data);
                            resolve(data);
                        }
                    });   
                })
            }
            test().then(botResponse=>{
                console.log("BOT Response in MESSENGER: " + botResponse)
                return res.status(status).send("BOT SERVER: " + botResponse);
            })
        }
        else {
            console.log("NO USER INPUT FOUND");
            status = 400;
        }
    }

})
module.exports = router;