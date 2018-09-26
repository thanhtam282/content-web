angular.module('api.services', []).service("dataService", _APIdataService)

function _APIdataService($sce) {
	var APIs = 'http://localhost:3000';

	this.get = function (callback) {
		$http.get(APIs).then(callback)
	};

	this.add = function (callback) {
		$http.post(APIs).then(callback);
	}

	this.del = function (callback) {
		$http.delete(APIs).then(callback);
	};

	this.save = function (callback) {
		$http.put(APIs).then(callback);
	};

}
