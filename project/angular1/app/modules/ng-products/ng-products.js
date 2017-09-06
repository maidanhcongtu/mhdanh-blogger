(function(){
	"use strict";
	angular.module("Directive.MyProduct",[])
		.directive("myproduct", [function(){
			return {
				restrict: "E", // A(attribute), E(element), C(class), M(comment)
				templateUrl: "app/modules/ng-products/ng-products.html",
				scope: { // without scope, we use scope from controller that embbed this directive
			        products: '=', // =products
			        title: '@',
			        onBack: "&",
			        showPrice: "&",
			        showProduct: "&"
			    },
			    transclude: true,
			    controller: ["$scope", function($scope){
			    	console.log("ok man");
			    	$scope.goBack = function() {
			    		console.log("go back event in directive");
			    		$scope.onBack();
			    	}
			    }],
			    link: function(scope, element, attrs, okam) {
			    	console.log("scope");
			    	console.log(scope);
			    	console.log(element);
			    	console.log(attrs);
			    	console.log(okam);
			    }
			}
		}]);
})();