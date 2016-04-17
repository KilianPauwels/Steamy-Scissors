var app = angular.module("artistDatabase", []);
app.controller("myController", [function($scope,$http){
	
	this.artist = {
		age: '',
		description:'',
		facebooklink:'',
		img:'',
		name:''
	};
	var data = new Firebase("onzedatabase.com/data")

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};

		/*$http.get("https://burning-torch-1101.firebaseio.com/.json")
		.succes(function(results){
			console.log( "in succes");

		})
		.error(function(error){
			console.log(error);
		})*/
}]);