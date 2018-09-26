angular.module('main.controller', []).controller("MainController", _mainController)

function _mainController($scope, $http, toastr) {
	$http({
		method: 'GET',
		url: '/db/main.json'
	}).then(function (response) {
		$scope.settings = eval(response.data.settings);
		toastr.success('Init thành công!', 'Thông báo!', {timeOut: 5000})
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
	
}
