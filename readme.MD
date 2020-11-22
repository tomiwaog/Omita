# Personal Virtual Agent
Omita is a Virtual Assistant with Cognitive abilities. Able to understand expressions, humour, apathy and empathy.

### Screenshots
!["Omita Artificial Intelligence BOT" having a conversation with human](https://github.com/tomiwaog/omita/blob/master/public/images/omita_bot.PNG?raw=true)

### Live Demo
NOTE: The BOT server is tunnelled to a localhost and the host machine may be offline at time of visitng.
Tunneling service provided by [PageKite](https://pagekite.net/)

If you're able to catch the host online, it'd be at of the following Test Servers:
* [Omita Test Server 1](https://omita.pagekite.me/)

### Improved UI
UI has been improved since last screenshot. Observable via test URL.

### General Social Interation
Omita is capable conversing with human in Natural Language.

### Understands Humour
Comprehensive cognition of jokes and humour. 

### SMS Spoofing
BOT is now able to send SMS to User's friends and network. SMS is also possible.
## Upcoming Features

### Arrange Emergency PhoneCalls

### Able to communicate to friends on users' behalf

### Able to perform Mathematical Arithmetic

### Business Marketting Mailing

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