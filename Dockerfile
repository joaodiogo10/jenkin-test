# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/web-demo

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory

COPY ./app/* ./app/
COPY ./tests/* ./tests/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "./app/server.js"]
