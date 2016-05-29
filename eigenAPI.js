var express = require('express');
var body = require("body-parser");
var app = express();
var http = require('http');


app.use(body.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/home')
	.get(function(req,res){
		var artists =[];
		var namen = [];
	
		http.get("https://burning-torch-1101.firebaseio.com/.json")
		.success(function(results){
			var artists = results.data;
			console.log("in succes");
		
				for(var i=0; i < artists.length; i++){
				var current = artists[i].name;
				if(namen.indexOf(current)<0){
				namen.push(current);
				}
			}
		}.error(function(error){
			console.log(error);
		});
	})
	.post(function(req,res){
		res.json(artists);
	});

app.put("/uploadArtists", function(req,res){
	this.artist = {
		age: '',
		description:'',
		facebooklink:'',
		img:'',
		name:''
	};
	var data = new Firebase("https://burning-torch-1101.firebaseio.com/data");

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};
});

app.delete("deleteArtists", function(req,res) {
	var artistRef = new Firebase("https://burning-torch-1101.firebaseio.com/data/id");
	artistRef.remove();

	var onComplete = function(error) {
		if(error){
			console.log('synchronization failed');
		} else {
			console.log('synchronization succeded');
		}
	};

	artist.remove(onComplete);
})

app.listen(2222, function() {
	console.log("listening at 2222");
})