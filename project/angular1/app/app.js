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
				.when("/admin/san-pham", {
					template: "<div>Chỉ có user với role admin mới truy cập được vào trang này</div>",
					requireLogin: true,
					requirePermission: ["admin"]
				}).when("/", {
					template: "<div>home page <a href='' ng-click='dangXuat()' ng-show='logined'>Đăng xuất</a> <a href='#/dang-nhap' ng-hide='logined'>Đăng nhập</a></div>",
					controller: "HomeCtrl"
				}).when("/san-pham", {
					templateUrl: "app/views/san-pham/san-pham-list.html",
					controller: "ListSanPhamCtrl"
				}).when("/san-pham/:id", {
					templateUrl: "app/views/san-pham/san-pham-detail.html",
					controller: "SanPhamDetailCtrl",
					requireLogin: true
				}).when("/dang-nhap", {
					templateUrl: "app/views/dang-nhap/dang-nhap.html",
					controller: "DangNhapCtrl"
				}).otherwise("/");
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
		.run(["$rootScope", "$translate", "$location", "MyAuth", function($rootScope, $translate, $location, MyAuth) {
		    $rootScope.$on('$routeChangeStart', function (event, next) {

		    	if(!MyAuth.checkPermission(next)) {
		    		$location.path("/");
		    	}
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