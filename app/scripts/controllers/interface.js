'use strict';

angular.module('origami')
    .controller('InterfaceCtrl', function($scope, $http, $log) {

        $scope.el = [{content: "<p>derp</p>"},{content: "<p>lol</p>"}];
        $scope.dropped = [];

        // var iframe = angular.element('iframe')[0].contentWindow.document,
        //     $body = angular.element('body', iframe);
        //
        // $body.html('ok');
        // console.log($body);

        $scope.onDropComplete=function(data,evt){
            console.log("drop success, data:", data);
            $scope.dropped.push(data);
            console.log($scope.dropped);
        }
    });
