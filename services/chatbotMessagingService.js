function WatsonServiceSetUp() {
    const AssistantV1 = require('ibm-watson/assistant/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');
    
    const assistant = new AssistantV1({
      version: '2020-04-01',
      authenticator: new IamAuthenticator({
        apikey: process.env.MESSENGER_API_KEY,
      }),
      serviceUrl: 'https://api.eu-gb.assistant.watson.cloud.ibm.com',
    });
    return assistant;
}

const assistant = WatsonServiceSetUp();

async function sendMessage(userMessage) {
    console.log("BOTMESSAGINGSERVICE: ")
    console.log(userMessage)
    await assistant.message({
        workspaceId: process.env.AGENTID,
        input: { 'text': userMessage }
    })
        .then(res => {
            // console.log(JSON.stringify(res.result, null, 2));
            console.log("Result is: ")
            console.log (res.result.output.text[0]);
            return res.result.output.text[0];
        })
        .catch(err => {
            console.log(err)
        });
}

function getMessage(userInput) {
    return "You made a get request: " + "SERVER REsponding"
}

module.exports = { sendMessage, getMessage };