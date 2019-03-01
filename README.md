# Techbook
## Overview
This is a app to showcase tech startup projects, business plans, or any application you wish. By displaying your content, other user will be able to view that product and leave any professional comments or opinions, endorse your product, or save it to their favorites page to refer back to it. Between the feedback and possible endorsments, you'll be able to get your product off the ground in no time!

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
## Tech Stack
## Link

