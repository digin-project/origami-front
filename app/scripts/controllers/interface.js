'use strict';

angular.module('origami')
    .controller('InterfaceCtrl', function($scope, $http, $log) {

        $scope.el = [
            {
                content: "<p>derp</p>",
                styles : {
                    width: "100%",
                    height: "500px",
                    background: "url('http://2015.digin.fr/images/construct_2_light.d0388e0f.jpg') center center no-repeat"
                },
                html : "<div style='margin-top: 150px; margin-left: 50px;'><h1 style='color:  #fff;'>Mon super titre à la Froont</h1></div>"
            },
            {
                content: "<p>lol</p>",
                styles : {
                    width: "100%",
                    height: "400px",
                    background: "yellow"
                }
            }
        ];
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

            console.log($('#user-website').html());
        }

    });
