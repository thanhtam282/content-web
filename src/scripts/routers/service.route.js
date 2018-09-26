angular.module('service.router', []).config(_serviceRoute)

function _serviceRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('service', {
			url: '/service',
			data : { 
				pageTitle: 'Dịch Vụ' 
			},
			views: {
				"@": {
					controller: 'ServiceController',
					templateUrl: '/views/service.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
