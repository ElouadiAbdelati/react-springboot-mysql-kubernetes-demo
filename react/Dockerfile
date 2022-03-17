FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

# Arguments
ARG API_URL
ENV API_URL=${API_URL}

RUN npm i
CMD ["npm", "run", "start"]