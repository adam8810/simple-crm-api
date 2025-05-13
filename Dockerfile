FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN chmod +x ./entrypoint.sh

EXPOSE 8089

ENTRYPOINT ["./entrypoint.sh"]
