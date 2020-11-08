FROM node:12

#Create app directory at destination
WORKDIR /usr/src/app

#Copy package json
COPY package*.json ./

#Install app dependencies
RUN npm install
# For Prodcution env replace with below
# RUN npm ci --only=production

#Bundle all app source files
COPY . .

#Enable port on Server
EXPOSE 8080
#Run app
CMD ["node", "server.js"]