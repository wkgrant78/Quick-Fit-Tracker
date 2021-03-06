# Quick Fit Tracker

### PROJECT DESCRIPTION:
Create a workout tracker with the provided front-end code. This application will require a Mongo database with a Mongoose schema and handle routes using Express. The API developed will be based on the CRUD model (create, retrieve, update, and delete).


The purpose of this app is to allow the user to view, create, and track daily workouts. They will have the option to log multiple exercises in any given day, view exercise details, and assign which type of exercise they completed.


### ACCEPTANCE CRITERIA/REQUIREMENTS:
* Application should allow users to:
    * Create a new workout plan or continue with the previous activity
    * Add exercises to a new or previous workout plan
    * View activity details:
        - name
        - type
        - weight
        - sets/reps
        - duration/distance
* Deploy app with a MongoDB database to Heroku


### DEVELOPMENT PLAN:
* Create repo and main folders and files, import provided "Develop" folder and install required npm packages
* Create a MongoDB Atlas account and connect to database
* Write the server.js, create workout/exercise models, api/html routes
* Check functionality
* Deploy onHeroku
* Edit UI - if time permits


### COMMITS:
* Initial commit with imported "Develop" folder
* Installed npm packages, created new folders and reorganized file structure
* Started server.js
* Started api-routes.js
* Completed models/workout.js, updated README
* Completed models/index.js, updated README
* Completed html-routes.js, updated README
* Reverted to original folder/file structure - could not get paths to function
* Fixed api-routes - functioning on local host... redeployed, 'bench press' only exercise being stored
* Updated README and added screenshots



### SCREENSHOTS:

#### Quick Fitness Tracker
<img src="./images/quickFitTracker.PNG" alt="quick fitness tracker">

#### Fitness Progress Report
<img src="./images/progressReport.PNG" alt="fitness progress report">


### HEROKU URL:

https://quick-fit-tracker.herokuapp.com/

### GIThUB URL:

https://github.com/wkgrant78/Quick-Fit-Tracker.git