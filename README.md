<p align="center">
  <img src="https://github.com/breno-sapucaia/challenge-fullstack/blob/main/book-ui/public/logo192.png" />
</p>
<h1 align="center">Welcome</h1>
<p align="center">This is my solution for the <a href="https://github.com/FotonTech/fullstack-challenge">Fullstack Challenge</a> provided by <a href="https://fotontech.io/">Foton</a></p>


<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-fullstack-challenge">About the Fullstack Challenge</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-running">Installation and running</a></li>
      </ul>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

# About the Fullstack Challenge
The challange was develop a Book Library designed in figma.
I need to do some mandatory tasks like: form validation; create a new book; search by name...

But if the noia that exists in me greets the noia that exists in you, we know that we do more than the mandatory.

In order to go further.
I choose to work with graphql, I learned how use graphql with those 7 days and applied in the project.
Since the deisgn is for mobile devices, nothing more fair than use graphql that walks side by side with mobile applications.

time spend: [wakatime](https://wakatime.com/@BrenoSapucaiaSantos/projects/lzhbkfvqyp?start=2021-05-15&end=2021-05-21)
## Built With

backend: 
- Typeorm 
- TypeGraphlQL with Typeid (Depedency Injection)
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
 

# Getting Started:
You must have in your machine to run the project those guys:

## Prerequisites
- node@latest
- npm@latest
- docker: 	19.03.0+
- docker-compose specification: 3.8
- yarn@latest (globaly installed)

## Installation and Running


1. clone this repo in your machine
```sh
  git clone https://github.com/breno-sapucaia/challenge-fullstack.git
  cd challange-fullstack
```
2. in the root run docker-compose with the flag -d 
```sh
docker-compose up -d
```
3. go to the api folder, install the depedenceies and run the dev enviroment for ts-node
```sh
cd api
yarn
yarn dev
```
4. open another terminal in the root of the project and run the following commands:
```sh
cd book-api
yarn
yarn start
```
5. once react server compile end access [localhost:3000](http://localhost:3000/)

# Contact
Contact me via:
- <a href="mailto:brenoss.magalhaes@gmail.com">brenoss.magalhaes@gmail.com</a>
- [linkedin](https://www.linkedin.com/in/breno-sapucaia/)
- [twitter](https://twitter.com/sapu_io)


