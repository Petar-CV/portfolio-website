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

# Setting environment variables
ARG NEXT_PUBLIC_SANITY_DATASET=production
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=""
ARG NEXT_PUBLIC_BASE_URL=http://localhost:3000/

ENV NEXT_SHARP_PATH="/usr/src/personal-website/node_modules/sharp"
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

# Copying source files
COPY . .

RUN rm .env*

# Building app (build generates static files so it needs API to be running)
# TODO: Improve this!!!
RUN (npm run dev) & (sleep 5; curl http://localhost:3000/) && npm run build

EXPOSE 3000

# Running the app
CMD ["npm", "start"]