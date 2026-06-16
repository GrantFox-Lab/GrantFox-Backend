# Use official Node.js 18 LTS Alpine image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the API port (defaulting to 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]