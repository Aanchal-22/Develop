define(['script'], function(app) {
    'use strict';
    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "public/header.html",
            controller: "headerCtrl",
        });
    }]);
});
