FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install curl and ping utilities for network testing
RUN apk add --no-cache curl iputils

COPY . .

EXPOSE 3001

# Add wait-for-it script to wait for MongoDB
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

CMD ["/wait-for-it.sh", "mongodb:27017", "--", "npm", "start"]