angular.module('user.controller', []).controller("UserController", _userController)

function _userController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: 'http://localhost:5000/api/v1/users',
	}).then(function (response) {
		$scope.data = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 003 - User: ' + error);
	});
}
