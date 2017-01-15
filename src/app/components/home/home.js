angular.module('myApp.home', [])
.component('home', {
	templateUrl: 'app/components/home/home.html',
	controller: function HomeController() {
		this.welcomeText = 'Welcome to myApp Home!';
	}
});