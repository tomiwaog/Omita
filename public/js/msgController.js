$(document).ready(function(){

    $("#userMessage").keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which) 
        if (code == 13){
            $("#btnSubmit").trigger('click');
            document.getElementById('userMessage').value = "";
        }
    });

    $("#btnSubmit").click(function(){
        var userMessage = $("#userMessage").val();
        formattedUserMessage = `<p id="user_id">Me: ${userMessage}</p>`;
        $("#userMessageQueue").append(formattedUserMessage);
        sendMessageToBot(userMessage);
    })
})

function sendMessageToBot(userInput){
    var response= `You said "${userInput}"`;
    formattedResponse = `<p id="bot_reply" style="color: green">BOT: ${response} </p>`;
    $("#userMessageQueue").append(formattedResponse);
}