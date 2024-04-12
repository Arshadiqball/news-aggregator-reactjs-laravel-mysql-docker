FROM node:14.17.0-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy React.js files
COPY . .

EXPOSE 3000

CMD npm start
