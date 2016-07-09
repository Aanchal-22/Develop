define([
    'jquery',
    'angular',
    'main',
    'controllers/main',
    'services/main',
    'filters/main',
    'routes',
    'interceptors',
    'resources',
    'px-datasource',
], function($, angular, controllers, routes) {
    'use strict';

    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var predixApp = angular.module('predixApp', [
        'app.routes',
        'app.interceptors',
        'app.controllers',
        'app.services',
        'app.resources',
        'app.filters',
        'sample.module',
        'predix.datasource',
        'ngCookies',
    ]);

    predixApp.run([
        '$rootScope',
        '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.admin = true;
            $rootScope.qcr = true;
            $rootScope.history = true;
            $rootScope.report = true;
            $rootScope.adhoc = true;
            $rootScope.search = true;
            $rootScope.reopen = true;
            $rootScope.cockpit = true;

            $rootScope.startPage = false;
            $rootScope.chngPwd = false;
            $rootScope.signOut = false;
            $rootScope.indexView = false;

        }
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    predixApp.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$http', 'loadingService', '$translate',
        'loginService', '$cookies', '$cookieStore', '$state', '$stateParams',
        function($scope, $rootScope, $location, $http, loadingService, $translate, loginService, $cookies, $cookieStore, $state, $stateParams) {
            console.log("entered Login code");

            $rootScope.admin = false;
            $rootScope.qcr = false;
            $rootScope.history = false;
            $rootScope.report = false;
            $rootScope.adhoc = false;
            $rootScope.search = false;
            $rootScope.reopen = false;
            $rootScope.cockpit = false;
            /* $scope.qcrClicked=function(){
                    $rootScope.$emit('qcrClicked');
                 }*/
            $scope.selectedNav = '';
            $scope.qcrClicked = function() {
                    //alert("setctrl");
                    //shareDataService.data=false;
                    $rootScope.hiddenValues = "value_hidden";
                    $rootScope.showOnGO = false;
                    $scope.selectedNav = 'selectedNav';
                }
                //console.log($cookieStore.get('userInfo'))
        }
    ]);


    //Set on window for debugging
    window.predixApp = predixApp;

    //Return the application  object
    return predixApp;
});
