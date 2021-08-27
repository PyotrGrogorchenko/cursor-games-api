FROM node:14.17.3-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "prod"]
