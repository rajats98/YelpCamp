var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
var campgrounds = [
{name:"camp1",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
{name:"camp2",image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
{name:"camp3",image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
{name:"camp1",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
{name:"camp2",image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
{name:"camp3",image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"}

];

app.get('/',function(req,res) {
	res.render("landing");
});

app.get('/campgrounds',function (req,res) {
	res.render('campgrounds',{campgrounds:campgrounds});
});

app.post('/campgrounds',function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newcamp = {name:name,image:image};
	campgrounds.push(newcamp);
	res.redirect('/campgrounds');
});

app.get('/campgrounds/new',function (req,res) {
	res.render("new");
});

app.listen(3000,function(){
	console.log('Yelpcamp server started');
});
