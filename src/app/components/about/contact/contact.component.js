angular.module('myApp.about.contact', [])
.component('contact', {
    templateUrl: 'app/components/about/contact/contact.template.html',
    controller: function ContactController() {
        this.test_variable = true;
    }
});