
describe('Contact Component', function() {

    beforeEach(angular.mock.module('myApp.about.contact'));

    describe('Contact Controller', function() {

        it('should be defined', inject(function($componentController) {
            var contactController = $componentController('contact');
            
            console.log(contactController);
            expect(contactController).toBeDefined();
        }));

    });

});