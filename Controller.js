var app= angular.module("myapp",[]);
app.controller("artistController", ["$scope", function($scope){
	$scope.title = "Top Artists";
	$scope.artists = [
	{
		name: "Taylor Swift",
		age: 27,
		description: "beste vrouwelijke artiest ooit",
		facebooklink: "https://www.facebook.com/TaylorSwift/?fref=ts",
		img: "http://www.etonline.com/fashion/2015/05/24151317/300_taylor_swift_472314146.jpg"
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
		description: "420 blaze it",
		img: "http://i68.tinypic.com/mm3mo3.jpg"
	}]
}]);