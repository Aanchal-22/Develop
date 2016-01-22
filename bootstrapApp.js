define(['angular-route', 'app/myHeader/myHeader'], function() {

    var app = angular.module("myApp", ['ngRoute', 'app.myHeader']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/myHeader/myHeader.html',
            controller: 'myHeader'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

    return app;
});
