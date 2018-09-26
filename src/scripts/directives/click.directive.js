angular.module('click.directive', []).directive("myClick", _myClick)

function _myClick() {
	return {
		// restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
		// scope: {
		// 	//@ reads the attribute value, = provides two-way binding, & works with functions
		// 	title: '@'
		// },
		// template: '<div>{{ myVal }}</div>',
		// templateUrl: 'mytemplate.html',
		// controller: controllerFunction, //Embed a custom controller in the directive
		link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
	}
}
