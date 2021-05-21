<p align="center">
  <img src="https://github.com/breno-sapucaia/challenge-fullstack/blob/main/book-ui/public/logo192.png" />
</p>
<p align="center"><h1>Welcome</h1></p>
This is my solution for the <a href="https://github.com/FotonTech/fullstack-challenge">Fullstack Challenge</a> provided by <a href="https://fotontech.io/">Foton</a>

## About the Fullstack Challenge
The challange was develop an Book Library designed in figma.
I need to do some mandatory tasks like: form validation; create a new book; search by name ect...

But if the noia that exists in me greets the noia that exists in you, we know that we do more than the mandatory.

In order to go futher I choose to work with graphql, I learned how use graphql with those 7 days and applied in the project.
Since the deisgn is for mobile devices, nothing more fair than use graphql that walks side by side with mobile applications.

# Running the Challenge:
in order to run the project you must have in your machine

- node@latest
- docker: 	19.03.0+
- docker-compose specification: 3.8
- yarn@latest (globaly installed)

### Steps to reproduce in order to run the project:

1. Craete folder mongodb in the root of the project and
2. run `docker-compose up` in the root of the project to start mongodb instance
3. in `~/api` run `yarn` to install all depedencies 
4. in `~/api` run `yarn dev` to start the ts-node-dev server
5. in `~/book-ui` run `yarn` to install all dependecies
6. in `~/book-io` run `yarn start` to start the react-script start
7. once react server compile end access ![localhost:3000](http://localhost:3000/)

# Core Dependecies
backend: 
- Typeorm 
- TypeGraphlQL with Typeid (Injection Of Depedency)
- Express
- Apollo Server Express
- Graphql
- MongoDB
- Typescript

frontend:
- ReactJS
- Styled Components
- Apollo Client for React
- GraphQL
- Typescript
- React Router Dom
- Formik
- Yup
- DraftJS
