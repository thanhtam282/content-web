angular.module('about.router', []).config(_aboutRoute)

function _aboutRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'AboutController',
					templateUrl: '/views/about.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
