# Use Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

CMD ["sh", "-c", "npm run dev && npm run build && npm start"]

