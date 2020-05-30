var express = require("express"),
  app = express();

var request = require('request');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/gallery", function(req,res){
	request('https://jsonplaceholder.typicode.com/photos',function(error, response, body){
	if(!error && response.statusCode == 200){
		const gallery = JSON.parse(body);
		res.render("gallery",{ gallery:gallery });
	}
});
});

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/home", function(req, res){
	res.render("home");
});
app.get("/about", function(req, res){
	res.render("about");
});
app.get("/vision", function(req, res){
	res.render("vision");
});
app.get("/organizers", function(req, res){
	res.render("organizers");
});
app.get("/speakers", function(req, res){
	res.render("speakers");
});
app.get("/register", function(req, res){
	res.render("register");
});
app.listen(3000, function(){
	console.log("Tech-Conference server has started!!!!");
});