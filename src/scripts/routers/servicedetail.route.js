angular.module('servicedetail.router', []).config(_servicedetailRoute)

function _servicedetailRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('servicedetail', {
			url: '/service/:id',
			data : { 
				pageTitle: 'Dịch Vụ' 
			},
			views: {
				"@": {
					controller: 'ServiceDetailController',
					templateUrl: '/views/servicedetail.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
