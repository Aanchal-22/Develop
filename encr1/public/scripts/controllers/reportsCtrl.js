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
    controllers.controller('reportsCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {



        var chart = new Highcharts.Chart({
            credits: {
                enabled: false
            },
            exporting: { enabled: false },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                renderTo: piechart,
            },
            annotationsOptions: {
                enabledButtons: false
            },

            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Proprietary or Undetectable',
                    y: 0.2
                }]
            }]
        });


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
