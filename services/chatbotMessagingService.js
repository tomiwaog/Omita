const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { resolveInclude } = require('ejs');

function WatsonServiceSetUp() {
    const AssistantV1 = require('ibm-watson/assistant/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const assistant = new AssistantV1({
        version: '2020-04-01',
        authenticator: new IamAuthenticator({
            apikey: process.env.CONVERSATIONENGINE_API_KEY,
        }),
        serviceUrl: process.env.CONVERSATIONENGINE_SERVICE_URL,
    });
    return assistant;
}

const assistant = WatsonServiceSetUp();
let lastContext = {};
function sendMessage(userMessage, next) {
    assistant.message({
        workspaceId: process.env.CONVERSATIONENGINE_AGENTID,
        context: lastContext,
        input: { 'text': userMessage }
    })
        .then(res => {
            // console.log(JSON.stringify(res.result, null, 2));
            lastContext = res.result.context;

            //Enable SMS Feature if SMS Request is initiated
            let messageDetails = res.result.output.custom_api ? res.result.output.custom_api.sms : "";
            if (process.env.SMS_FEATURE == 'ON' && messageDetails) {
                console.log("*** Launching SMS Service")
                smsFeature(messageDetails, res);
            }
            console.log("User Input: " + userMessage);
            //Combine Watson Multiple Responses into one response
            let combinedResponse = "";
            (res.result.output.text).forEach(response => {
                combinedResponse += response + "<br />";
            })
            console.log("Watson Combined Response: " + combinedResponse);
            return combinedResponse;

        }).then(data => {
            console.log("Response to be passed to the caller/UI: " + data);
            next(null, data);
        })
        .catch(err => {
            console.log(err)
        });
}


function smsFeature(messageDetails, res) {
    if (process.env.SMS_FEATURE == 'ON' && messageDetails) {
        //If SMS Token was provided by user, Call SMS API
        console.log("\n*******************************************************");
        if (messageDetails.sms_token != process.env.SMS_TOKEN_PASSWORD) {
            console.log("Message Not Sent. USER didnt have a token");
            res.result.output.text.push("<br/>Message was not sent, It costs a lot to keep this service running!");
        }
        else{
            console.log("*****************SENDING MESSAGE *******************\n")
            require('./smsServer').sendSMS({ toAddress: messageDetails.receiver_number, messageContent: messageDetails.sms_content, fromAddress: messageDetails.sender_identity },
                (messageResult) => {
                    if (messageResult['status'] == 200) {
                        res.result.output.text.push("<br/>Message was sent!");
                        console.log("SMS Message sent with the following details");
                        console.log(messageDetails);
                    }
                    else {
                        res.result.output.text.push("Message was not sent, Might be an issue with Mobile Number " + toAddress);
                        console.log("Error, Message was not delivered!.");
                        console.log(res.result.output.text);
                        return "Message was not sent, It costs a lot to keep this service running!"
                    }
                })
        } 
    }
}
module.exports = { sendMessage };