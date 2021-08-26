FROM node:14-alpine
WORKDIR /api
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "prod"]
