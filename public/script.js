define(["angular-route", "headerM"], function() {

    var app = angular.module('myApp', ['ngRoute', 'headerModule']);
    debugger;

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "public/header.html",
            controller: "headerCtrl"
        });
    }]);

    return app;
});
