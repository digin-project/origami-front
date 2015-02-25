'use strict';

/**
 * @ngdoc function
 * @name origamiFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the origamiFrontApp
 */
angular.module('origamiFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
