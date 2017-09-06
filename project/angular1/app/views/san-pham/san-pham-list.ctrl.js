(function(){
	"use strict";
	angular.module("User.SanPhamList.Ctrl",[])
		.controller("ListSanPhamCtrl", ["$scope", function($scope){
			$scope.products = [
				{
					name: "Dầu Gội",
					price: 30000
				},
				{
					name: "Bột Giặc",
					price: 40000
				},
				{
					name: "Kem Đánh Răng",
					price: 10000
				}
			];

			$scope.onBack = function() {
				console.log("go back only no param");
			}

			$scope.showPrice = function(priceParam) {
				console.log("call back show priceParam " + priceParam);
			}

			$scope.showProduct = function(product) {
				console.log("product detail");
				console.log(product);
			}
		}]);
})();