(function(){
	"use strict";
	var app = angular.module("App",[
		"ngRoute",
		"MyCtrl"
		])
		.config(["$routeProvider", function($routeProvider) {
			$routeProvider
				.when("/san-pham", {
					template: "<div>Danh sách sản phẩm</div>",
					controller: "ListSanPhamCtrl"
				}).when("/san-pham/:id", {
					template: "<div>Sản phẩm chi tiết {{idSanPham}}</div>",
					controller: "SanPhamDetailCtrl"
				});
		}]);
})();