/*global define */
define(['angular', 'sample-module'], function(angular, sampleModule) {
    'use strict';

    /* Directives  */
    sampleModule.directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);

    return sampleModule;
});
/**
 * Created by 703125940 on 6/2/2016.
 */
