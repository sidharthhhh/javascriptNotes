# Use the official Node.js image with Alpine Linux as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Specify the command to run your Node.js application
CMD ["npm", "start"]
