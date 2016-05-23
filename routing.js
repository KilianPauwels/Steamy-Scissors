var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

		.when("/start",{
			templateUrl : "views/start.html",
			controller : "startController"
		})

		.when("/about", {
			templateUrl : "views/about.html",
			controller : "aboutController"
		})

		.when("/addArtists", {
			templateUrl : "views/addArtists.html",
			controller : "addArtistsController"
		});
});

app.controller("startController", function($scope,$http){
	$scope.title = "Top artists";
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
	var data = new Firebase("https://burning-torch-1101.firebaseio.com/data")

	this.upload = function(){
		console.log("user clicked upload", this.artist);
		var newDataPush = data.push(this.artist);
	};

		
}]);