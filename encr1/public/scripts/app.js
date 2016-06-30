/** global angular, require */
/**
 * Load controllers, directives, filters, services before bootstrapping the application.
 * NOTE: These are named references that are defined inside of the config.js RequireJS configuration file.
 */
define([
    'jquery',
    'angular',
    'main',
    'controllers/main',
    'services/main',
    'filters/main',
    'routes',
    'interceptors',
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
            $rootScope.admin=true;
            $rootScope.qcr=true;
            $rootScope.history=true;
            $rootScope.report=true;
            $rootScope.adhoc=true;
            $rootScope.search=true;
            $rootScope.reopen=true;
            $rootScope.cockpit=true;

            $rootScope.startPage=false;
            $rootScope.chngPwd=false;
            $rootScope.signOut=false;
            $rootScope.indexView=false;

        }
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    predixApp.controller('MainCtrl', ['$scope', '$rootScope', '$location','$http','loadingService', function($scope, $rootScope, $location, $http, loadingService) {
        console.log("entered Login code");

        $rootScope.admin=false;
        $rootScope.qcr=false;
        $rootScope.history=false;
        $rootScope.report=false;
        $rootScope.adhoc=false;
        $rootScope.search=false;
        $rootScope.reopen=false;
        $rootScope.cockpit=false;
   /* $scope.qcrClicked=function(){
           $rootScope.$emit('qcrClicked');
        }*/
        $scope.selectedNav='';
        $scope.qcrClicked=function(){
            //alert("setctrl");
                //shareDataService.data=false;
                $rootScope.hiddenValues="value_hidden";
                $rootScope.showOnGO=false;
                $scope.selectedNav='selectedNav';
            }

        $scope.toggleClass = "fa fa-bars";
        $scope.visible = "navbar-right";

        $scope.showNav = function() {
            //$scope.showNavBar = !$scope.showNavBar;
            $scope.visible = $scope.visible === "navbar-right" ? "navbar-right--visible" : "navbar-right";
            $scope.toggleClass = $scope.toggleClass === "fa fa-bars" ? "fa fa-close red-cross" : "fa fa-bars";
        }

        $scope.toggleMenuItem = false;

        $('.nav-list-ul li').on('click', function() {
            $scope.toggleMenuItem = !$scope.toggleMenuItem;

            if ($scope.toggleMenuItem == true) {
                var menuItem = this.children[0];
                /*menuItem.children has i tag with class fa-caret-right*/

                $(menuItem.children).removeClass('fa fa-caret-right');
                $(menuItem.children).addClass('fa fa-caret-down');

                /*menuSubItem has ul tag with class submenu-hide*/
                var menuSubItem = this.children[2];
                $(menuSubItem).removeClass('submenu-hide');
                $(menuSubItem).addClass('submenu-show');
            } else {
                var menuItem = this.children[0];
                /*menuItem.children has i tag with class fa-caret-right*/

                $(menuItem.children).removeClass('fa fa-caret-down');
                $(menuItem.children).addClass('fa fa-caret-right');

                /*menuSubItem has ul tag with class submenu-hide*/
                var menuSubItem = this.children[2];
                $(menuSubItem).removeClass('submenu-show');
                $(menuSubItem).addClass('submenu-hide');
            }

        });


    }]);


    //Set on window for debugging
    window.predixApp = predixApp;

    //Return the application  object
    return predixApp;
});
