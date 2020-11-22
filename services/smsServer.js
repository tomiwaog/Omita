function sendSMS(obj, callback){
    console.log("RUNNING SMS MESSAGING SERVER");
    toAddress = obj.toAddress;
    messageContent = obj.messageContent;
    fromAddress = obj.fromAddress;
    isValidNumber = validateNumber(toAddress);
    let smsResponse = "ERROR: Message \""+ messageContent+"\" could not be sent to "+ toAddress;
    if (!isValidNumber){
        console.log({status: 400, body: smsResponse})
        return {status: 400, body: smsResponse};
    }
    
    // Can check status of this API to determine response message
    return require ('./smsService').sendSMS(fromAddress,toAddress, messageContent, function (err, result){
        console.log("Result from Paid SMS API");
        if (err){
            console.log("ERROR Sending SMS")
            console.log(err);
        }else {
            if (result.messages[0]['status'] !="0"){
                console.log("Message Not Delivered! Status code is not 0");
                
                callback({status: 400, body: smsResponse});
                return {status: 400, body: smsResponse};
            }
            
            console.log("SMS SERVER STATUS: SUCCESS");
            console.log(result);
            console.log("**** FINISHED SMS MESSAGING SERVER");
            callback({status: 200, body: "Message sent beautifully"});
        }
    });
    
}

function validateNumber(number){
    const re = /^(\+44|0044|0)(7)[4-9][0-9]{8}$/;
    var result= re.test(number);
    return result;
}
module.exports = {sendSMS}

//Test Module
// sendSMS({toAddress: "funny stuff"});
// sendSMS({toAddress: "07788888420"});
// sendSMS({toAddress: "+447788880420"});
// sendSMS({toAddress: "+4407788880420"});