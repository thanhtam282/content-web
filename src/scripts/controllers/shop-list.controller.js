angular.module('shop-list.controller', []).controller("Shop-listController", _shopController)

function _shopController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: '../db/shop-list.json',
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - Shop: ' + error);
	});


}
