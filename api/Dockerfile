FROM node

# Creating api Directory
RUN mkdir -p /api
WORKDIR /api

# Installing Api Dependecies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Compiling api ts -> js
COPY . /api
RUN yarn typeorm migration:run

CMD ["yarn", "start"]