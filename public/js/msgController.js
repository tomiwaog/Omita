"use strict";

$(document).ready(function () {

    $("#userMessage").keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which)
        if (code == 13) {
            $("#btnSubmit").trigger('click');
            document.getElementById('userMessage').value = "";
        }
    });

    $("#btnSubmit").click(function () {
        var chat = document.getElementById('userMessageQueue');
        var userMessage = $("#userMessage").val();
        userMessage = userMessage.trim();
        var formattedUserMessage = `<p id="user_id">Me: ${userMessage}</p>`;
        $("#userMessageQueue").append(formattedUserMessage);
        sendMessageToBot(userMessage);
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    })
})

function sendMessageToBot(userInput) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/service/botmessenger/sendmessage', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200 && xhr.responseText) {
            var botResponse = xhr.responseText;
            var response = `${botResponse}`;
            var formattedResponse = `<p id="bot_reply" style="color: green">BOT: ${response} </p>`;
            $("#userMessageQueue").append(formattedResponse);
        }
        else if (xhr.status=400){
            console.error("Invalid Input provided");
        }
        else {
            console.error("Cannot connect to BOT messageService")
        }
    }
    xhr.onerror = function () {
        console.log("Not found")
    }
    var result = JSON.stringify({"userMessage":userInput});
    xhr.send(result);
}
