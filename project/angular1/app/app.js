(function(){
	"use strict";
	var app = angular.module("App",[
		"ngRoute",
		"MyCtrl"
		])
		.config(["$routeProvider", function($routeProvider) {
			$routeProvider
				.when("/san-pham", {
					templateUrl: "app/views/san-pham/san-pham-list.html",
					controller: "ListSanPhamCtrl"
				}).when("/san-pham/:id", {
					templateUrl: "app/views/san-pham/san-pham-detail.html",
					controller: "SanPhamDetailCtrl"
				});
		}]);
})();