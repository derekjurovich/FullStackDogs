<img src="http://montanacodeschool.com/wp-content/uploads/2015/06/MCS_LOGO_v1.png" width="200" align="right"/>

##Full Stack Dogs

##Purpose
The purpose of this week long project is practice creating API's using jQuery, servers using Node, and databases using MongoDB

##Directions
Fork and clone this repository. Complete all of the following per day. Everyday, when you have finished, push your code into GitHub.

* I have not provided any code for you, so this will be a great opportunity for you to develop something from ground up. Today we will setup the basic front end and server.

* Also, while I called this repo Full Stack Dogs, note, you may call it anything you like and you may use for for any function that you like. Some examples may include an ecommerce setup, a chat service, or simply a feature to get, add, change, or delete data. So feel free to be as creative or uncreative as you like.


###Day 1

* Create your file structure so it looks something like this.

```project
      index.js
      dogs.js
      .gitignore
      public
        index.html
        styles.css
        app.js
```

* In the terminal, inside of your project folder, do the following.

  * ``npm init`` This will initialize your folder with a package.json file.
  * ``npm install --save cors express body-parser`` This will load some dependancies that will be needed for the project. This will also create a node_modules folder.
  * ``npm install -g nodemon`` or ``sudo npm install -g nodemon`` if that doesn't work. Nodemon will act similarly to live-server, but it will allow us to run both the front and back end.

* In the .gitignore file, simply type node_modules. This will ignore the node_modules folder when performing git functions. These are very large folders that we do not want loading into GitHub.

* Also, before we get started, lets plug some dummy data into the dogs.js file, so we can have a starting point. For my file, I used this.

```
module.exports = [{ //data reserve
  name: "Fido",
  breed: "Doberman"
},
{
  name: "Toby",
  breed: "Beagle"
},
{
  name: "Max",
  breed: "Bulldog"
}];
```

* Okay, its time to start building.  Go ahead and run through all of the code needed to setup our server in the index.js file. Make sure you include each of the following.

  * Require body-parser, cors, and express. And don't forget to require your dummy data in the dogs.js file.  
  * Instantiate express, cors, body-parser.json, body-parser.urlencoded, and set up express.static to run your public folder, so that nodemon works with your front end too.
  * Setup your listener on any available port. Normally, we use anything between 3000 and 9000.

* Next set up your end points. This would include your get, post, put, delete functions. In each function, pull in the dummy data from the dogs.js file, and depending on which end point you are working on, display or manipulate the data.

* When you have made it to here, test your code on Postman to ensure that your end points are working properly.

* Next, go ahead and start working on your front end. Setup your API requests so they match up to each of your end points. And that is all you will need to do today. If you have more time, I have made a list in the next section for you to work on.

##If you have more time...

And if you have time, try to finish each of the following.

  * Setup your html and css.
  * Make it so that you can see your data display on the view.
  * Make it so that you can interact with your data from the front end.
  * This includes getting your data and displaying it, posting new data, changing existing data, and deleting existing data.

##Copyright

(c) Montana Code School, 2016.
