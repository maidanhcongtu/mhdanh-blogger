(function(){
	"use strict";
	var app = angular.module("App",[
		"ngRoute", // angular-route
		"pascalprecht.translate", // angular-translate
		"ngSanitize", // angular-sanitize,
		"ngCookies", // angular-storage,
		"MyCtrl"
		])
		.filter("htmlSafe", ['$sce', function($sce) {
		    return function(htmlCode){
		        return $sce.trustAsHtml(htmlCode);
		    };
		}])
		.config(["$routeProvider", function($routeProvider) {
			$routeProvider
				.when("/san-pham", {
					templateUrl: "app/views/san-pham/san-pham-list.html",
					controller: "ListSanPhamCtrl"
				}).when("/san-pham/:id", {
					templateUrl: "app/views/san-pham/san-pham-detail.html",
					controller: "SanPhamDetailCtrl"
				});
		}])
		.config(['$translateProvider', function ($translateProvider) {
			$translateProvider.useStaticFilesLoader({
				prefix:"app/asserts/languages/",
				suffix:".json"
			})
			// Enable escaping param of HTML
  			$translateProvider.useSanitizeValueStrategy('escapeParameters');
			$translateProvider.preferredLanguage('vi');
			$translateProvider.useLocalStorage();
		}])
		.run(["$rootScope", "$translate", "$location", function($rootScope, $translate, $location) {
		    $rootScope.$on('$routeChangeStart', function (event, next) {
		    	// find param lang in url
		    	var param = $location.search();
		    	if(param.lang != undefined) {
			    	var lang = "vi";
			    	if(["vi","en"].indexOf(param.lang) != -1) {
			    		lang = param.lang;
			    	}
			    	$translate.use(lang);
		    	}
		    });
		}]);

})();