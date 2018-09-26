angular.module('service.controller', []).controller("ServiceController", _serviceController)



function _serviceController($scope, $http, toastr) {
	$http({
		method: 'GET',
		url: '/db/service.json'
	}).then(function (response) {
		$scope.data = eval(response.data.data_service);
		toastr.success('Init thành công!', 'Thông báo!', {timeOut: 5000})
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
	
}
