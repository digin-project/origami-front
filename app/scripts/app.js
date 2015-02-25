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
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .otherwise({ redirectTo: '/' });
    });
