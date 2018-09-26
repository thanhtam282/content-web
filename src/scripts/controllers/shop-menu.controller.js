angular.module('shop-menu.controller', []).controller("Shop-menuController", _shopmenuController)

function _shopmenuController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: '../db/shop-menu.json',
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - Shop: ' + error);
	});
	$scope.loadlist = function(){
		console.log("1")
	}
}
