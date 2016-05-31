var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var dogs = require('./dogs.js');

var app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

//get
app.get('/puppies', function(req, res, next){

	res.send(dogs);

})


//post
app.post('/puppies', function(req, res, next){

	dogs.push(req.body);
	res.send(dogs);


})

//put
app.put('/puppies/:id', function(req, res, next) {
	console.log(req.params.id);
for (var i = 0; i < dogs.length; i++) {

	if (req.params.id == dogs[i].idnum) {
		dogs[i]=req.body;

	}
}

	res.send(dogs);
})

// changes breed
// app.put('/puppies/:id', function(req, res, next) {
// for (var i = 0; i < dogs.length; i++) {

// 	if (req.params.id === dogs[i].breed) {
// 		dogs[i]=req.body;

// 	}
// }

// 	res.send(dogs);
// })


//delete checks if id exists

app.delete('/puppies/:id', function(req,res,next){
var found = false;
for (var i = 0; i < dogs.length; i++) {
	if (req.params.id === dogs[i].idnum) { 
		dogs.splice(i, 1);
		found = true;
	}
}
if (found) {
	res.send(dogs);
} else {

	res.send("Id not found.")
}

})





app.listen(8000, function() {

//anything above 3000 is usually good, port 80 is live public web applications
	console.log("listening on 8000");

});

