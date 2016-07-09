/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
/*global define */
define(['angular', 'angular-translate', 'angular-translate-loader-static-files'], function(angular, angular_translate, angular_translate_loader_static_files) {
    'use strict';
    return angular.module('app.resources', ['pascalprecht.translate']).config(['$translateProvider', function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '../languages/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');

    }]);
});
