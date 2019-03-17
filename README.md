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
    . Once you create an app, add the app id, app secret, and callbackURL to your .env file. Those will be your CLIENT_ID, CLIENT_SECRET and CALLBACK_URL for passport. 
    4. Images are uploaded via cloudinary. Cloudinary has an amazing free tier plan, so to get images to upload head over to https://cloudinary.com/ and set up an account. You'll want to enter your CLOUD_KEY, CLOUD_SECRET and CLOUD_NAME to your env file.

    By now your env file should looks something like this:

    ```
    password=[yourPassword]
    database=[yourDatabase]
    username=[yourUsername]
    host=[yourhost]
    dialect=mysql
    GITHUB_CLIENT_ID=[your appID from github]
    GITHUB_CLIENT_SECRET=[your appSecret from github]
    GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback
    GOOGLE_CLIENT_ID=[your appID from google]
    GOOGLE_CLIENT_SECRET=[your appSecret from google]
    GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
    CLOUD_KEY=[yourCloudKey]
    CLOUD_SECRET=[yourCloudSecret]
    CLOUD_NAME=[yourCloudName]
    ```
    5. Running it locally, make sure the buttons href is localhost:5000, and the redirect in routes/api/authRoutes is redirecting back to your localhost:3000. Then, you'll want to ```npm start``` the server in the main directory, and then in another terminal change directories to the client folder and run ```npm start```. The root folder starts the backend, the client folder starts the react app.

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

There are four models used: auths, projects, favorites, and reviews. The auth model is where the user data will be stored. Fields include firstname, lastname, email, avatar, authMode, authModeID, and password. This table has an associate to projects model as one Auth may have many Projects. The Projects model is where the data for each project will be stored. The fields include a title, link, description, image, and authID.
- Routes

There are auth routes that handle the authentication for passport and redirects. In this application we build a RESTful API which containes multiple get, post, put, and delete routes. There are user routes that handle post request for new users and this will post to the endpoint and add to the DB. Implement get request to see if user's email exists in local login, verify and redirect. There are also routes for the projects. Routes that get all the projects, the users projects, post a new project, update an exsiting project, or delete a project. There are also project routes that will return the last five projects added to the db, and a route to query the DB by word search. 
### Login 
- Passport local login, OAuth Google & GitHub

![LoginPage](client/public/loginPageTechbook.png)

For Google and GitHub, create an app in the developer link listed in the 'Get Started' section of this readme. Once those are created save the appID and appSecret in the .env file. Save them as ClientID and ClientSecret. You will also need to add a callback URL so passport can verify the callback route for authentication. Passport.js has some starter code in their documentation for each OAuth; copy and paste those in to begin. In the passport controller, require the models folder, this way you can verify if the user exists and if not then add the user to the DB. in the new [provider]Strategy, pass in your clientID, clientSecret and callbackURL. This is then followed by a callback function that takes in the user profile and another callback: done. Begin by checking the DB if the user exists. **If** existingUser is true use the callback 'done' and pass in existingUser, **else** create a new user in the DB. After the user has been added to the DB, use **.then** function that passes the user and sends the callback 'done' passing the user. The user should now be authenticated. Passport has session persistance to direct all requests from a single user. To do this Passport uses serializeUser and deserializeUser. Passport takes in the userData and serializes it, then to pass the data Passport then deserializes that data. 

### React
- Components

The are many stateless and statefull components used to develop this app. Some of the stateless components include page builders and buttons such as Navbar, Wrapper, GoogleLoginBtn, GitHubLoginBtn, DonateBtn, Input and Footer. There are other stateless components that render the list of projects or comments and those are TopFiveProjects, FavoriteComp and Comment. The statefull components are HomeNav, CommentForm, EditProject, ImageInputForm, Form, LoginForm, and RegisterForm.
- Pages

By default the router will route you to the LoginPage. From there you can either register by name, email, and password or if you have already registered you can login with your email and password. You can also choose the option to login with your Google+ or GitHub account. From there the app will redirect you to the Home page. The HomeNav holds the state of the user and displays the users avatar in the right corner. If you logged in locally (email and password), you can add a image by clicking the default avatar and in the dropdown select 'Edit Profile'. In the Profile Page the user can add/update their avatar as well as change their username. Once changed, the app will redirect you back to the Home page. The Home page displays a jumbotron of the users image, a greeting, and a sublead. The Home page also renders the 5 most recently added projects with the most recent at the top. Add a project by hovering over the 'Projects' tab on the navbar and select 'Your Projects'. Now at ProjectsPage, click the 'Add Project' button to the right and a modal will pop up with a form to add a project. Complete the form and submit. The page will display your recently added project and you can update any field by clicking the 'update' button or delete the project. View all the projects by hovering over the 'Projects' tab and selecting 'All Projects'. At the AllProjectsPage there is a table that paginates by 4 rows and displays the users project tite, link to view project, description and image. When selecting 'View Project' this will take the user to a project page that will display only that project. On this DisplayPage the user can choose to add the project to their favorites by clicking the heart icon, donate to the project's owner, or leave any comments or reviews in the comment section below. The user can go back to the table to view all the projects by clicking the '<- Back' link in the right lower corner or click 'See Project' and this link will redirect the user to the projects live website.

![DisplayPage](client/public/projectdisplay.png)

- React Router

React router creates the routes to quickly route and render the specific component for that given endpoint. If a route is chosen that is not programmed into the router, by default the React router will redirect to a 404 page and display page not found.

## Tech Stack
### Front End
- React
- React Router
- Reactstrap
- CSS
- Moment.js
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
### Test
- Mocha
- Chai

## Link

https://techbook-startup.herokuapp.com/
