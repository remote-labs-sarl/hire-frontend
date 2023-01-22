FROM node:latest
# Create app directory
RUN NODE_OPTIONS=--max-old-space-size=1024
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
RUN rm -rf node_modules/ --force && npm cache clean --force
RUN npm -g install npm@latest
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
