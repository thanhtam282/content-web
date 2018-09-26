angular.module('shop.router', []).config(_shopRoute)

function _shopRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('shop', {
			url: '/shop',
			data : { 
				pageTitle: 'Sản Phẩm' 
			},
			views: {
				"shop-menu@": {
					controller: 'Shop-menuController',
					templateUrl: '/views/shop-menu.html',
				},
				"shop-list@": {
					controller: 'Shop-listController',
					templateUrl: '/views/shop-list.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
