(function(){
	"use strict";
	angular.module("MyCtrl",[])
		.controller("AppCtrl", ["$scope", function($scope){
			$scope.sayHello = "Welcome angular 1";
		}])
		.controller("ListSanPhamCtrl", ["$scope", function($scope){

		}])
		.controller("SanPhamDetailCtrl", ["$scope", "$routeParams", function($scope, $routeParams){
			$scope.idSanPham = $routeParams.id;
		}]);;
})();