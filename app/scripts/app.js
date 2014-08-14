/**
 * Angular app file.
 */
(function() {


    angular.module('sarusApp', [
        // Define dependencies.
        'ngRoute',
        'angular-inview',
        'sarusApp.controllers',
        'sarusApp.directives',
        'ngSanitize',
        'ngLoadScript',
        'sarusApp.factories'


    ]).
    // Route configuration below.
    config(function($routeProvider, $locationProvider) {
        // HTML5 mode Required to avoid urls with # anchor tags.
        $locationProvider.html5Mode(true);

        // Set routing.
        $routeProvider.
        when('/:slug', {
            controller: 'PostController',
            resolve: {}
        }).otherwise({
            redirectTo: '/'
        });
    });


}());
