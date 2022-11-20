FROM node:16-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/personal-website
WORKDIR /usr/src/personal-website

# Installing dependencies
COPY package*.json ./   
RUN npm install

# Install sharp library for image optimization (recommended by Next.js)
RUN npm install sharp

RUN apk add curl

# Copying source files
COPY . .

# Building app (build generates static files so it needs API to be running)
# TODO: Improve this!!!
RUN (npm run dev) & (sleep 20; curl -s http://localhost:3000/) && npm run build

EXPOSE 3000

# Running the app
CMD ["npm", "start"]