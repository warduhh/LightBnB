# LightBnB![Screenshot 2023-04-24 at 4 52 16 PM](https://user-images.githubusercontent.com/120592685/234114326-dcdea972-e393-4f4e-9b2c-301a77bcade7.png)


* `db` contains all the database interaction code.
  
  * `json` is a directory that contains a 
  bunch of dummy data in `.json` files.
  * `index.js` starts up the application by rendering the listings.
  * `properties.js` is responsible for all queries related to properties. It doesn't currently connect to any database, all it does is return data from `.json` files.
  * `users.js` is responsible for all queries related to users. It doesn't currently connect to any database, all it does is return data from `.json` files.

* `public` contains all of the HTML, CSS, and client side JavaScript.   * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `routes` contains the router files which are responsible for any HTTP requests to `/users/something` or `/api/something`. 
* `styles` contains all of the sass files. 
* `server.js` is the entry point to the application. This connects the routes to the database.
