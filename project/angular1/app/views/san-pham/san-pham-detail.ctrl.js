(function(){
	"use strict";
	angular.module("User.SanPhamDetail.Ctrl",[])
		.controller("SanPhamDetailCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
			$scope.idSanPham = $routeParams.id;
		}]);
})();