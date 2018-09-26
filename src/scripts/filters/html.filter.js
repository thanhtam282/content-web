angular.module('html.filter', []).filter("html", _htmlFormat)

function _htmlFormat($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
}
