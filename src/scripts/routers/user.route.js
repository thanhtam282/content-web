angular.module('user.router', []).config(_userRoute)

function _userRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('user', {
			url: '/user',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'UserController',
					templateUrl: '/views/user.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
