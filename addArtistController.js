var app = angular.module("artistDatabase", []);
app.controller("myController", [function($scope,$http){
	
	this.artist = {
		age: '',
		description:'',
		facebooklink:'',
		img:'',
		name:''
	};
	var data = new Firebase("onzedatabase/data")

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};

		
}]);