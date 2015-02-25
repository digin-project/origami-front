'use strict';

/**
 * @ngdoc function
 * @name origamiFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the origamiFrontApp
 */
angular.module('origamiFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
