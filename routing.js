var app = angular.module("myApp", ["ngRoute"]);

app.service("artistService", function(){
	var artistName = "";

	
});

app.config(function($routeProvider){
	$routeProvider

		.when("/start",{
			templateUrl : "views/start.html",
			controller : "startController"
		})
			.when("/artists",{
			templateUrl : "views/artists.html",
			controller : "artistController"
		})
				.when("/AboutArtist",{
			templateUrl : "views/AboutArtist.html",
			controller : "AboutArtistController"
		})

		.when("/about", {
			templateUrl : "views/about.html",
			controller : "aboutController"
		})

		.when("/addArtists", {
			templateUrl : "views/addArtists.html",
			controller : "addArtistsController"
		})

		.when("/tracks", {
			templateUrl : "views/tracks.html",
			controller : "tracksController"
		})

		.when("/Artist", {
			templateUrl: "views/artist.html",
			controller: "artistController"
		});
});

app.controller("startController", function($scope,$http,artistService){
	$scope.title = "Top artists";
	$scope.artists =[];
	$scope.namen = [];
<<<<<<< 5d77cc20dec0cbe7c29b52b661c9896ea47e297a

		$http.get("https://burning-torch-1101.firebaseio.com/.json")
=======
	
		$http.get("onzedatabase/.json")
>>>>>>> f325ba6249d6b300e5f2b0d3b77643b2dae8fd36
		.success(function(results){
			$scope.artists = results.data;
			console.log("in succes");
		
				for(var i=0; i < $scope.artists.length; i++){
				var current = $scope.artists[i].name;
				if($scope.namen.indexOf(current)<0){
				$scope.namen.push(current);
			}
		}
		console.log(results.data);
		})
		.error(function(error){
			console.log(error);
		})
});

app.controller("artistController", function($scope,$http){
	$scope.title = "artists";
	$scope.artists =[];
	$scope.namen = [];

		$http.get("https://burning-torch-1101.firebaseio.com/.json")
		.success(function(results){
			$scope.artists = results.data;
			console.log("in succes");
		
				for(var i=0; i < $scope.artists.length; i++){
				var current = $scope.artists[i].name;
				if($scope.namen.indexOf(current)<0){
				$scope.namen.push(current);
			}
		}
		console.log(results.data);
		})
		.error(function(error){
			console.log(error);
			
		})
});

app.controller("AboutArtistController", function($scope,$http){

$(document).ready(function () {
console.log("dit werkt")
$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&section=0&page=Taylor_Swift&prop=text&format=json&callback=?', function(json) { 
    $('#information').html(json.parse.text['*']); 
    $("#information").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
    $("#information").find("a").attr("target", "_blank"); 
  });
});

});

app.controller("aboutController",function($scope){
	$scope.message = "about";
});

app.controller("addArtistsController", [function($scope,$http){
	
	this.artist = {
		age: '',
		description:'',
		facebooklink:'',
		img:'',
		name:''
	};
<<<<<<< 5d77cc20dec0cbe7c29b52b661c9896ea47e297a
	var data = new Firebase("DATABASE/data")
=======
	var data = new Firebase("onzedatabase/data");
>>>>>>> f325ba6249d6b300e5f2b0d3b77643b2dae8fd36

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};

		
}]);

app.controller("artistController", [function($scope, $http, artistService){
	$scope.artist = artistService.artist

}]);

app.controller("tracksController", function($scope){
	$scope.title = "Top tracks";
});