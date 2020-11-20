# Personal Virtual Agent
Omita is a Virtual Assistant with Cognitive abilities. Able to understand expressions, humour, apathy and empathy.

### Screenshots
!["Omita Artificial Intelligence BOT" having a conversation with human](https://github.com/tomiwaog/omita/blob/master/images/omita_bot.PNG?raw=true)

### Live Demo
NOTE: The BOT server is tunnelled to a localhost and the host machine may be offline at time of visitng.
Tunneling service provided by [LocalTunnel](https://github.com/localtunnel/localtunnel)

If you're able to catch the host online, it'd be at of the following Test Servers:
* [Omita Live test Server 1](https://omita.loca.lt)
* [Omita Live test Server 2](https://omitabot.loca.lt)
* [Omita Live test Server 3](https://omitachatbot.loca.lt)

### General Social Interation
Omita is capable conversing with human in Natural Language.

### Understands Humour
Comprehensive cognition of jokes and humour. 

## Upcoming Features

### Arrange Emergency PhoneCalls

### Able to communicate to friends on users' behalf

### Able to perform Mathematical Arithmetic

### Business Marketting Mailing

### Improved UI

### SMS Spoofing

### Awkward situation avoidance

## Installation /Usage Guide
### Running it on local machine
The env file is excluded from the pushed repo. User would have to create their .env file to run this on their machine.

Simple add the following variable to your .env file:
HOST={{host, if unset localhost is used}}
PORT={{running port}}
CONVERSATIONENGINE_API_KEY={{Your API Key for Bot messages}}
CONVERSATIONENGINE_AGENTID={{Agent ID could be a workspace ID or a skill ID}}
CONVERSATIONENGINE_SERVICE_URL={{Service URL to be used with API key. https://api.eu-gb.assistant.watson.cloud.ibm.com is used to denote London region for Watson Asistant}}