'use strict';

/**
 * @ngdoc overview
 * @name origamiFrontApp
 * @description
 * # origamiFrontApp
 *
 * Main module of the application.
 */
angular
    .module('origami', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .otherwise({ redirectTo: '/' });

        if(window.history && window.history.pushState)
            $locationProvider.html5Mode(true);
    });
