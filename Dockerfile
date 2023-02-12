FROM node:14.20.0-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN npx prisma generate

RUN npx prisma migrate dev

COPY . .

CMD ["yarn", "start"]
