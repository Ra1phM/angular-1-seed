require('angular');
require('angular-ui-router');

require('./components/home/home.js');
require('./components/about/about.js');

var app = angular.module('myApp', [
	'ui.router',
	'myApp.home',
	'myApp.about'
]);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				component: 'home'
			},
			"header@home":{
				templateUrl:"app/shared/header/header.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views: {
			"" : {
				component: 'about'
			},
			"header@about": {
				templateUrl: "app/shared/header/header.html"
			}
		}
	});
});