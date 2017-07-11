FROM node:slim

#create app directory
RUN mkdir -p . /usr/src/freshdesk
WORKDIR /usr/src/freshdesk

#COPY ALL RESOURCES
COPY package.json /usr/src/freshdesk/
RUN \
    cd /usr/src/freshdesk && \
    npm install && \
    npm node --version

#bundle app source
COPY . /usr/src/freshdesk

#expose ports
EXPOSE 5000
EXPOSE 8000

#MOUNT POINT
CMD ["npm", "start"]
