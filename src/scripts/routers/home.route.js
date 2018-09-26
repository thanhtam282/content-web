angular.module('home.router', []).config(_homeRoute)

function _homeRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			data : { 
				pageTitle: 'Trang chủ' 
			},
			views: {
				"@": {
					controller: 'HomeController',
					templateUrl: '/views/home.html',
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
