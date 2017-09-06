(function(){
	"use strict";
	angular.module("MyCtrl",[
		"User.SanPhamDetail.Ctrl",
		"User.SanPhamList.Ctrl",
		"User.DangNhap.Ctrl",


		"Directive.MyProduct",
		
		"Service.MyAuth",
		"Service.MyLocalStorage"
		])
		.controller("AppCtrl", ["$scope", function($scope) {
			$scope.sayHello = "Welcome angular 1";
		}])
		.controller("HomeCtrl", ["$scope", "MyAuth", function($scope, MyAuth) {
			$scope.logined = MyAuth.isLogined();
			$scope.dangXuat = function() {
				MyAuth.clearUserInLocalStorage();
				$scope.logined = false;
			}
		}])
})();