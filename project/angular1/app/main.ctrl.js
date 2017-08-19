(function(){
	"use strict";
	angular.module("MyCtrl",[])
		.controller("AppCtrl", ["$scope", function($scope){
			$scope.sayHello = "Welcome angular 1";
		}]);
})();