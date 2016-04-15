var app = angular.module("artisDatabase",[]);
app.controller("myController", function($scope,$http){
	$scope.title = "Top artists";
	$scope.artists =[];
	$scope.namen = [];

		$http.get("ONZE DATABASE")
		.success(function(results){
			$scope.artists = results.data;
			console.log("in succes");
		
				for(var i=0; i < $scope.artists.length; i++){
				var current = $scope.artists[i].name;
				if($scope.namen.indexOf(current)<0){
				$scope.namen.push(current);
			}
		}
		})
		.error(function(error){
			console.log(error);
		})
});