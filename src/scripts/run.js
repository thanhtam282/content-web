angular.module('app.run', []).run(_runApp)

function _runApp($rootScope, $state, $stateParams, $location) {
	var path = $location.path();
	console.log('Đã hoàn thành chạy ứng dụng! - ' + path)
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$rootScope.$on('$stateChangeStart', function (event, toState) {
		console.log('Bắt đầu thay đổi');
		console.log(toState);
	});
	$rootScope.$on('$locationChangeSuccess', function (e) {
		console.log('Di chuyển route hoàn chỉnh');
	});
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		console.log('Thay đổi hoàn thành');
		console.log(event);
		console.log(toState);
	});
}
