requirejs.config({
    baseUrl: "",
    paths: {
        'angular': "node_modules/angular/angular.min",
        'angular-route': "bower_components/angular-route/angular-route.min",
        'bootstrapApp': "bootstrapApp"
    },
    shim: {
        'angular': {
            'exports': "angular"
        },
        'angular-route': {
            'deps': ['angular']
        }
    },
})


require(['angular', 'bootstrapApp'], function(angular, myApp) {
    debugger;
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["myApp"]);
    });
})
