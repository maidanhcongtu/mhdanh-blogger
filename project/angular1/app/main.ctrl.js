(function(){
	"use strict";
	angular.module("MyCtrl",[
		"User.SanPhamDetail.Ctrl",
		"User.SanPhamList.Ctrl"
		])
		.controller("AppCtrl", ["$scope", function($scope) {
			$scope.sayHello = "Welcome angular 1";
		}])
})();