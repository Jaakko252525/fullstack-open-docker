FROM node:20

# Set the working directory to the directory containing your Node.js application
WORKDIR /todo-app/todo-backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Specify the command to run the app
CMD DEBUG=playground:* npm start
