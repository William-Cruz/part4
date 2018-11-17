# Express Practice

# Windows users - Make sure you remove single quotes from the package.json
# Setup
* fork, clone, npm install, npm start
* a web page has been created for you so don't worry about that
* your job is to build the server 
* the only code you need to change is in the `/server` folder



# Part 1 - Server

### server/index.js
* This is the starting point of the server, put all code here
* Make your app listen to port 3001

### Body
* Add body parser middleware to express

### Create express routes to get all things
* Add .get() routes for /contacts, /vehicles, /comments, /products
* response.json() the appropriate array

### Create express routes to get one thing
* Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
* add a path variable for id
* use the params.id to .find() the item from the appropriate array
* response.json() the item found

### Create express routes to create one thing
* Add .post() routes for /contacts, /vehicles, /comments, /products
* Add the information from the body to the appropriate array

Once completed, the web page should be able to list out the information, create new information and view one item of the information.


# Part 2 - Routes
* Create route files
* Organize the routes for /contacts, /vehicles, /comments, /products using express Router
* Import and use the Routers in index.js

# Part 3 - Controllers
* Create controller files 
* Import the arrays into the controller
* Take the code from the routes and put it into the controller
* create functions for list, show and create
* Import and use the controller functions in the appropiate Router

# Part 4 - Database
* In server/index.js, import and use mongoose. Connect to a database "advanced-express-practice" 
* Create the mongoose models for Contact, Vehicle, Comment Product
* CommentModel - body
* ContactModel - name, occupation, avatar
* VehicleModel - year, make, model
* ProductModel - name, description
* Change the code in the controllers to use the Models instead of hard coded arrays

### Points
* Base - 10pts
* Data shows in the page for the Lists - 5pts each (20pts)
* Creating data works - 10pts each (40pts)
* Can view one item at a time by id - 30pts
