define(['angular'], function() {
    'use strict';
    var app = angular.module('app.myHeader', []);
    app.controller('myHeader', ["$scope", function($scope) {
        $scope.message = "Hello Wolrd";
    }]);
    debugger;
    return app;
});
