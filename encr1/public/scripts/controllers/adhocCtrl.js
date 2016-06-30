    /**
     * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
     * Customize your widgets by:
     *  - Overriding or extending widget API methods
     *  - Changing widget settings or options
     */
    /* jshint unused: false */
    define(['angular',
        'controllers-module',
    ], function(angular, controllers) {
        'use strict';

        // Controller definition
        controllers.controller('adhocCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

            $scope.resizeCol = function() {


                var tHead = document.getElementsByClassName('ui-table-head')[0],
                    tBody = document.getElementsByClassName('ui-table-body')[0],
                    n = tHead.querySelector('table tr').cells.length;

                for (var i = 0; i < n; i++) {
                    if (tHead.querySelector('table tr').cells[i].offsetWidth < tBody.querySelector('table tr').cells[i].offsetWidth) {
                        // debugger
                        tHead.querySelector('table tr').cells[i].style.minWidth = tBody.querySelector('table tr').cells[i].offsetWidth + "px";
                    } else {
                        // debugger
                        tBody.querySelector('table tr').cells[i].style.minWidth = tHead.querySelector('table tr').cells[i].offsetWidth + "px";
                    }
                }

            }


            $scope.scrollTarget = function() {

                var tHead = document.getElementsByClassName('ui-table-head')[0],
                    tBody = document.getElementsByClassName('ui-table-body')[0];
                tBody.addEventListener('scroll', function() {
                    tHead.scrollLeft = tBody.scrollLeft;
                });
            }

            $scope.resizeCol();
            $scope.scrollTarget();
        }]);
    });
