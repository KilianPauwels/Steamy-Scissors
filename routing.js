var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

		.when("/start",{
			templateUrl : "views/start.html",
			controller : "startController"
		})
			.when("/artists",{
			templateUrl : "views/artists.html",
			controller : "	artistController"
		})

		.when("/about", {
			templateUrl : "views/about.html",
			controller : "aboutController"
		})

		.when("/addArtists", {
			templateUrl : "views/addArtists.html",
			controller : "addArtistsController"
		})

		.when("/showArtists",{
			templateUrl: "views/showArtists.html",
			controller: "showArtistsController"
		});
});

app.controller("startController", function($scope,$http){
	$scope.title = "Top artists";
	$scope.artists =[];
	$scope.namen = [];

		$http.get("database/.json")
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
	var data = new Firebase("database/data")

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};

		
}]);

app.controller("showArtistsController", [function($scope,$http){

	$("#showArtistsButton").click(function playSomeSound(genre){
	SC.get('/tracks',{
		genres: genre
	}, function(tracks){
			var random = Math.floor(Math.random()*49);
			SC.oEmbed(tracks[random].uri, {autoplay: true}, document.getElementById('target'));
		});
	});

	$(document).ready(function(){
		SC.initialize({
			client_id: '5c4bf4a850b4ac822bc9e6000203d52f'
	});


	var menuLinks = document.getElementById('genre');
		for(var i = 0; i < menuLinks.length; i++){
			var menuLink = menuLinks[i];
			menuLinks[i].onclick = function(e){
				e.preventDefault();
				playSomeSound(menuLink.innerHTML);
			};
		}
});

}]);