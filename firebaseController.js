var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
  	$scope.title = "Top Artists";
    var ref = new Firebase("https://burning-torch-1101.firebaseio-demo.com/");
          $scope.artiesten = $firebaseArray(data);
  }
]);