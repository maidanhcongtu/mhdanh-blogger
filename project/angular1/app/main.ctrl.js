(function(){
	"use strict";
	angular.module("MyCtrl",[
		"User.SanPhamDetail.Ctrl",
		"User.SanPhamList.Ctrl",

		"Service.MyAuth",
		"Service.MyLocalStorage"
		])
		.controller("AppCtrl", ["$scope", function($scope) {
			$scope.sayHello = "Welcome angular 1";
		}])
})();