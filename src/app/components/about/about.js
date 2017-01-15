require('./contact/contact.component.js');

angular.module('myApp.about', [
	'myApp.about.contact'
])
.component('about', {
	templateUrl: 'app/components/about/about.html',
	controller: function AboutController() {
		this.aboutText = 'This is the about component done right!';
	}
});