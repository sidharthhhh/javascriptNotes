# Use the official Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all application files
COPY . .

# Expose the port on which your Node.js application will listen
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
