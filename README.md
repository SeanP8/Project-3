# Techbook
## Overview
This is a MERN stack app to showcase tech startup projects, business plans, or any other application you wish. By displaying your content, other user will be able to view that product and leave any professional comments or opinions, endorse your product, or save it to their favorites page to refer back to it. Between the feedback and possible endorsments, you'll be able to get your product off the ground in no time!

## Get Started
- **IF** your cloning or forking this repo, you want to do a few things to get started. 
    1. ```npm install```
    2. create a .env file and add your configs for your database.
        - add your username, password, db, host, and dialect(MySQL)
    3. To get the google and github OAuths operating, you'll need to create an app on each of their developer sites. 
    GitHub: https://github.com/settings/developers
    Google: https://console.developers.google.com/ 
    
    Once you create an app, add the app id, app secret, and callbackURL to your .env file. Those will be your CLIENT_ID, CLIENT_SECRET and CALLBACK_URL for passport.

    4. Running it locally, make sure the buttons href is localhost:5000, and the redirect in routes/api/authRoutes is redirecting back to your localhost:3000. Then, you'll want to ```npm start``` the server in the main directory, and then in another terminal change directories to the client folder and run ```npm start```. The root folder starts the backend, the client folder starts the react app.

    Once your have all that configered, you should be good to go. 

## Tech Approach
### Server, DB, Models, Routes
- Server setup

The server is an Express server powered by Node. The server requires the dependencies which are express, express-sessions, body-parser, passport, cores, and cookie-parser. The server also requires a few folders such as routes, models, and passport controller. Config express to use body parser, cors, cookie-parser, sessions, routes, and the static folder in the client/build. Express also uses the passport functions initialize and session. Once all is configed, finish setting up the server with a listen function for the port. This function first syncronizes the database then listens for the PORT with a callback. 
- Sequelize setup

npm install sequelize and mysql2. Create a dynamic config file for sequelize-cli by creating a .sequelizerc file and add the following code:

```
var path = require('path');

module.exports = {
    'config': path.resolve('config','config.js') 
}
```
Now in terminal run sequelize init:config. This will automatically create a folder 'config' with file 'config.js'. Export this fille by adding module.exports = , to the top of the config file. Add your credentials to .env file and reference them to the config.js file. For deployment to heroku, make sure in the production is has: 'use_env_variable': 'JAWSDB_URL'. Now back in the terminal write sequelize init:models and a 'models' folder will be generated with a 'index.js' file included. Sequelize is now setup and can move forward to creating tables for the DB.
- Models

There are four models used: auths, projects, favorite, reviews. The auth model is where the user data will be stores. Fields include firstname, lastname, email, avatar, authMode, authModeID, and password. This table has an associate to projects model as one Auth may have many Projects. The Projects model is where the data for each project will be stored. The fields include a title, link, description, image, and authID.
- Routes

There are auth routes that handle the authentication for passport and redirects. In this application we build a RESTful API which containes multiple get, post, put, and delete routes. There are user routes that handle post request for new users and this will post to the endpoint and add to the DB. Implement get request to see if user's email exists in local login, verify and redirect. There are also routes for the projects. Routes that get all the projects, the users projects, post a new project, update an exsiting project, or delete a project. There are also project routes that will return the last five projects added to the db, and a route to query the DB by word search. 
### Login 
- Passport local login, OAuth Google & GitHub

![LoginPage](client/public/loginPageTechbook.png)

For Google and GitHub, create an app in the developer link listed in the 'Get Started' section of this readme. Once those are created save the appID and appSecret in the .env file. Save them as ClientID and ClientSecret. You will also need to add a callback URL so passport can verify the callback route for authentication. Passport.js has some starter code in their documentation for each OAuth; copy and paste those in to begin. In the passport controller, require the models folder, this way you can verify if the user exists and if not then add the user to the DB. in the new [provider]Strategy, pass in your clientID, clientSecret and callbackURL. This is then followed by a callback function that takes in the user profile and another callback: done. Begin by checking the DB if the user exists. **If** existingUser is true use the callback 'done' and pass in existingUser, **else** create a new user in the DB. After the user has been added to the DB, use **.then** function that passes the user and sends the callback 'done' passing the user. The user should now be authenticated. Passport has session persistance to direct all requests from a single user. To do this Passport uses serializeUser and deserializeUser. Passport takes in the userData and serializes it, then to pass the data Passport then deserializes that data. 

### React
- Components
- Pages
- React Router

## Tech Stack
### Front End
- React
- React Router
- Reactstrap
- CSS
- Lodash
- Joi Browser
- Axios
### Back End
- Express
- Node
- Sequelize
- MySQL
- Passport
- bcrypt
- Cloudinary
- Cookie Parser

## Link

