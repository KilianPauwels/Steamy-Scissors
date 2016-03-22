var app= angular.module("myapp",[]);
app.controller("artistController", ["$scope", function($scope){
	$scope.title = "Top Artists";
	$scope.artists = [
	{
		name: "Taylor Swift",
		age: 27,
		description: "beste vrouwelijke artiest ooit",
		facebooklink: "https://www.facebook.com/TaylorSwift/?fref=ts"
	},
	{
		name: "Kanye West",
		age: 69,
		description: "loser",
		facebooklink: "https://www.facebook.com/pages/Kanye-West/203406986358515?fref=ts&rf=107777555911981"
	},
	{
		name: "Wart Scheppers",
		age: 19,
		description: "junk"
	},
	{
		name: "Sven Bollaerts",
		age: 420,
		description: "420 blaze it"
	}]
}]);