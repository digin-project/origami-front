'use strict';

angular.module('origami')
    .controller('InterfaceCtrl', function($scope, $http, $log) {

        var iframe = angular.element('iframe')[0].contentWindow.document,
            $body = angular.element('body', iframe);

        $body.html('ok');
        console.log($body);
    });
