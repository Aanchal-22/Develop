/**
 * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
 * Customize your widgets by:
 *  - Overriding or extending widget API methods
 *  - Changing widget settings or options
 */
/* jshint unused: false */
define(['angular',
    'controllers-module'
], function(angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('editAreaCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

        $scope.queues = [
            {name: "PQE"},
            {name: "INSPECTOR"},
            {name: "MRP Plan"},
            {name: "Welding Engineer"},
            {name: "Cost Manager"},
            {name: "CC Engineer"},
            {name: "GT Engineer"},
            {name: "FE Engineer"},
            {name: "GT Engineer"},
            {name: "ASE Engineer"},
            {name: "CCE Plan"},
            {name: "MRP Plan"}
        ];


        $scope.toggleState=true;
        $scope.toggleClass='fa fa-caret-up';
        $scope.toggleFunc=function(){
            $scope.toggleState=!$scope.toggleState;
            $scope.toggleClass=$scope.toggleState==true?'fa fa-caret-up':'fa fa-caret-down';
        }

        $scope.toggleState1=true;
        $scope.toggleClass1='fa fa-caret-up';
        $scope.toggleFunc1=function(){
            $scope.toggleState1=!$scope.toggleState1;
            $scope.toggleClass1=$scope.toggleState1==true?'fa fa-caret-up':'fa fa-caret-down';
        }

        $scope.toggleState2=true;
        $scope.toggleClass2='fa fa-caret-up';
        $scope.toggleFunc2=function(){
            $scope.toggleState2=!$scope.toggleState2;
            $scope.toggleClass2=$scope.toggleState2==true?'fa fa-caret-up':'fa fa-caret-down';
        }

        $scope.toggleState3=true;
        $scope.toggleClass3='fa fa-caret-up';
        $scope.toggleFunc3=function(){
            $scope.toggleState3=!$scope.toggleState3;
            $scope.toggleClass3=$scope.toggleState3==true?'fa fa-caret-up':'fa fa-caret-down';
        }


        $scope.toggleState4=true;
        $scope.toggleClass4='fa fa-caret-up';
        $scope.toggleFunc4=function(){
            $scope.toggleState4=!$scope.toggleState4;
            $scope.toggleClass4=$scope.toggleState4==true?'fa fa-caret-up':'fa fa-caret-down';
        }

        $scope.toggleState5=true;
        $scope.toggleClass5='fa fa-caret-up';
        $scope.toggleFunc5=function(){
            $scope.toggleState5=!$scope.toggleState5;
            $scope.toggleClass5=$scope.toggleState5==true?'fa fa-caret-up':'fa fa-caret-down';
        }

    }]);
});
