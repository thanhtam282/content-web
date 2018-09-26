'use strict';

var app = angular.module('fullStackApp', ['ngAnimate', 'ngSanitize',
// Thự viện
'toastr', // popup lúc đầu
'ui.router', 'ui.bootstrap',
// Ứng dụng
'app.config', 'app.run', 'app.filters', 'app.controllers', 'app.routers', 'app.directives']);

angular.module('app.config', []).config(_configApp);

function _configApp($logProvider, $locationProvider, $compileProvider, toastrConfig) {
	// Ghi log
	$logProvider.debugEnabled(true);
	// Cấu hình hotlink
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
	$locationProvider.hashPrefix('~');
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
	// Config
	// Cấu hình Toast
	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 3000;
	toastrConfig.positionClass = 'toast-bottom-right';
	toastrConfig.preventDuplicates = true;
	toastrConfig.progressBar = true;
}

angular.module('app.run', []).run(_runApp);

function _runApp($rootScope, $state, $stateParams, $location) {
	var path = $location.path();
	console.log('Đã hoàn thành chạy ứng dụng! - ' + path);
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$rootScope.$on('$stateChangeStart', function (event, toState) {
		console.log('Bắt đầu thay đổi');
		console.log(toState);
	});
	$rootScope.$on('$locationChangeSuccess', function (e) {
		console.log('Di chuyển route hoàn chỉnh');
	});
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		console.log('Thay đổi hoàn thành');
		console.log(event);
		console.log(toState);
	});
}

angular.module('about.controller', []).controller("AboutController", _aboutController);

function _aboutController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: 'https://www.w3schools.com/angular/customers.php'
	}).then(function (response) {
		$scope.data = eval(response.data.records);
	}, function (error) {
		console.log('Lỗi 003 - About: ' + error);
	});
}

angular.module('app.controllers', ['main.controller', 'menu.controller', 'home.controller', 'about.controller', 'user.controller', 'service.controller', 'servicedetail.controller', 'shop-menu.controller', 'shop-list.controller']);

angular.module('home.controller', []).controller("HomeController", _homeController);

function _homeController($scope) {
	$scope.demo = 'AAAAAA';
}

angular.module('main.controller', []).controller("MainController", _mainController);

function _mainController($scope, $http, toastr) {
	$http({
		method: 'GET',
		url: '/db/main.json'
	}).then(function (response) {
		$scope.settings = eval(response.data.settings);
		toastr.success('Init thành công!', 'Thông báo!', { timeOut: 5000 });
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}

angular.module('menu.controller', []).controller("MenuController", _menuController);

function _menuController($scope, $http) {
	$http({
		method: 'GET',
		url: '/db/menu.json'
	}).then(function (response) {
		$scope.data = eval(response.data.menu);
	}, function (error) {
		console.log('Lỗi 001 - Menu: ' + error);
	});
}

angular.module('service.controller', []).controller("ServiceController", _serviceController);

function _serviceController($scope, $http, toastr) {
	$http({
		method: 'GET',
		url: '/db/service.json'
	}).then(function (response) {
		$scope.data = eval(response.data.data_service);
		toastr.success('Init thành công!', 'Thông báo!', { timeOut: 5000 });
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}

angular.module('servicedetail.controller', []).controller("ServiceDetailController", _servicedetailController);

function _servicedetailController($scope, $http, toastr) {
	$http({
		method: 'GET',
		url: '/db/service.json'
	}).then(function (response) {
		$scope.data = eval(response.data.data_service.id);
		toastr.success('Init thành công!', 'Thông báo!', { timeOut: 5000 });
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}

angular.module('shop-list.controller', []).controller("Shop-listController", _shopController);

function _shopController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: '../db/shop-list.json'
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - Shop: ' + error);
	});
}

angular.module('shop-menu.controller', []).controller("Shop-menuController", _shopmenuController);

function _shopmenuController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: '../db/shop-menu.json'
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - Shop: ' + error);
	});
	$scope.loadlist = function () {
		console.log("1");
	};
}

angular.module('user.controller', []).controller("UserController", _userController);

function _userController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: 'http://localhost:5000/api/v1/users'
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - User: ' + error);
	});
}

angular.module('click.directive', []).directive("myClick", _myClick);

function _myClick() {
	return {
		// restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
		// scope: {
		// 	//@ reads the attribute value, = provides two-way binding, & works with functions
		// 	title: '@'
		// },
		// template: '<div>{{ myVal }}</div>',
		// templateUrl: 'mytemplate.html',
		// controller: controllerFunction, //Embed a custom controller in the directive
		link: function link($scope, element, attrs) {
			element.bind('click', function () {
				element.html('You clicked me!');
			});
			element.bind('mouseenter', function () {
				element.css('background-color', 'yellow');
			});
			element.bind('mouseleave', function () {
				element.css('background-color', 'white');
			});
		}
	};
}

angular.module('app.directives', ['click.directive', 'enter.directive']);

angular.module('enter.directive', []).directive("ngEnter", _myEnter);

function _myEnter() {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if (event.which === 13) {
				scope.$apply(function () {
					scope.$eval(attrs.ngEnter, { 'event': event });
				});
				event.preventDefault();
			}
		});
	};
}

angular.module('app.filters', ['html.filter']);

angular.module('html.filter', []).filter("html", _htmlFormat);

function _htmlFormat($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
}

angular.module('about.router', []).config(_aboutRoute);

function _aboutRoute($stateProvider, $urlRouterProvider) {
	$stateProvider.state('about', {
		url: '/about',
		data: {
			pageTitle: 'Về chúng tôi'
		},
		views: {
			"@": {
				controller: 'AboutController',
				templateUrl: '/views/about.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
}

angular.module('home.router', []).config(_homeRoute);

function _homeRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
	$stateProvider.state('home', {
		url: '/',
		data: {
			pageTitle: 'Trang chủ'
		},
		views: {
			"@": {
				controller: 'HomeController',
				templateUrl: '/views/home.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
	$urlMatcherFactoryProvider.caseInsensitive(true);
}

angular.module('app.routers', ['home.router', 'about.router', 'user.router', 'service.router', 'servicedetail.router', 'shop.router']);

angular.module('service.router', []).config(_serviceRoute);

function _serviceRoute($stateProvider, $urlRouterProvider) {
	$stateProvider.state('service', {
		url: '/service',
		data: {
			pageTitle: 'Dịch Vụ'
		},
		views: {
			"@": {
				controller: 'ServiceController',
				templateUrl: '/views/service.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
}

angular.module('servicedetail.router', []).config(_servicedetailRoute);

function _servicedetailRoute($stateProvider, $urlRouterProvider) {
	$stateProvider.state('servicedetail', {
		url: '/service/:id',
		data: {
			pageTitle: 'Dịch Vụ'
		},
		views: {
			"@": {
				controller: 'ServiceDetailController',
				templateUrl: '/views/servicedetail.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
}

angular.module('shop.router', []).config(_shopRoute);

function _shopRoute($stateProvider, $urlRouterProvider) {
	$stateProvider.state('shop', {
		url: '/shop',
		data: {
			pageTitle: 'Sản Phẩm'
		},
		views: {
			"shop-menu@": {
				controller: 'Shop-menuController',
				templateUrl: '/views/shop-menu.html'
			},
			"shop-list@": {
				controller: 'Shop-listController',
				templateUrl: '/views/shop-list.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
}

angular.module('user.router', []).config(_userRoute);

function _userRoute($stateProvider, $urlRouterProvider) {
	$stateProvider.state('user', {
		url: '/user',
		data: {
			pageTitle: 'Về chúng tôi'
		},
		views: {
			"@": {
				controller: 'UserController',
				templateUrl: '/views/user.html'
			},
			"menu@": {
				controller: 'MenuController',
				templateUrl: '/views/menu.html'
			}
		}
	});
}

angular.module('api.services', []).service("dataService", _APIdataService);

function _APIdataService($sce) {
	var APIs = 'http://localhost:3000';

	this.get = function (callback) {
		$http.get(APIs).then(callback);
	};

	this.add = function (callback) {
		$http.post(APIs).then(callback);
	};

	this.del = function (callback) {
		$http.delete(APIs).then(callback);
	};

	this.save = function (callback) {
		$http.put(APIs).then(callback);
	};
}

angular.module('api.constant', []).constant("API_URL", 'http://localhost:8080');

angular.module('app.services', ['api.service', 'api.constant']);
//# sourceMappingURL=app.js.map
