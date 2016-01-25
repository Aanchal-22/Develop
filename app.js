requirejs.config({
    "paths": {
        "angular": "bower_components/angular/angular.min",
        "angular-route": "bower_components/angular-route/angular-route.min",
        "script": "public/script",
        "headerM": "public/headerCtrl"
    },
    "shim": {
        "angular-route": {
            'deps': ['angular']
        }
    }

});
require(['angular', 'script'], function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    });
});
