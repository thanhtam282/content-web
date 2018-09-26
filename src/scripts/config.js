angular.module('app.config', []).config(_configApp)

function _configApp($logProvider, $locationProvider, $compileProvider, toastrConfig) {
	// Ghi log
    $logProvider.debugEnabled(true);
	// Cấu hình hotlink
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
	$locationProvider.hashPrefix('~');
	// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requireBase: false
		// });
		// Config
	// Cấu hình Toast
	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 3000;
	toastrConfig.positionClass = 'toast-bottom-right';
	toastrConfig.preventDuplicates = true;
	toastrConfig.progressBar = true;
}
