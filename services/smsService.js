const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { response } = require('express');
const Nexmo = require('nexmo');

function sendSMS(from, to, text, callback) {
  console.log("RUNNING SMS SERVICE PAID API");
  if (process.env.SMS_FEATURE == 'ON') {
      const nexmo = new Nexmo({
        apiKey: 'ff4f8e1b',
        apiSecret: 'AoYx2aTDvvqeFnUC',
      });
      nexmo.message.sendSms(from, to, text, function (err, responseData) {
        console.log("***** SMS SERVER LOG:")
        if (err) {
          console.log(err);
        } else {
          console.log(responseData);
          if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
          } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
        }
        console.log(responseData);
        callback(null, responseData);
        return (null, responseData);
      });

    // mockSMS(to, callback);
  }
  else {
    console.log("Message was not sent!")
    return "Message Not sent";
  }
}

function mockSMS(to, callback) {
  console.log("RUNNING SMS SERVICE PAID API");
  if (process.env.SMS_FEATURE == 'ON') {
    data = {
      'message-count': '1',
      messages: [
        {
          to: to,
          'message-id': '1500000136F3261C',
          status: '0',
          'remaining-balance': '6.56700002',
          'message-price': '0.03330000',
          network: '23415'
        }
      ]
    }
    console.log("FINISHED SMS SERVICE PAID API");
    callback(null, data);
    return (null, data);
  }
}

module.exports = { sendSMS };

//Test SMS API
// const from = 'Vonage APIs';
// const to = '+447795550420';
// const text = 'Hello from Vonage SMS API';
// sendSMS(from,to,text);