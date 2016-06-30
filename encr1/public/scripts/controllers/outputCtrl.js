define(['angular', 'jquery',
    'controllers-module'
], function(angular, jquery, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('outputCtrl', ['$scope', '$rootScope', '$http', '$log', '$location',
        '$stateParams', 'engineServiceInfoService', '$timeout', 'loadingService',
        function($scope, $rootScope, $http, $log, $location,
            $stateParams, engineServiceInfoService, $timeout, loadingService) {

            // $scope.quoteID = $stateParams.quoteID;

            //console.log("response data for output screen before method::"+angular.toJson(outputResultData))
            var _placeholder = $('#module_loadData');
            console.log("request data for output screeen::" + angular.toJson($rootScope.OutputScreenRequestData));


            $scope.displayBody = false;

            $scope.loadOutPutScreenData = function() {


                loadingService.startSpinner(_placeholder);

                var promise =
                    engineServiceInfoService.getoutputScreenData($rootScope.OutputScreenRequestData);
                promise.then(
                    function(payload) {

                        $scope.outputScreenData = payload.data;
                        console.log("response data for output screen::" + angular.toJson($scope.outputScreenData))

                        $scope.baseOverhaulSum = $scope.outputScreenData.sumOfAllTyMaterial + $scope.outputScreenData.sumOfAllTyLabor + $scope.outputScreenData.sumOfAllTyIcr +
                            $scope.outputScreenData.sumOfAllTyEcr + $scope.outputScreenData.sumOfAllTyOther;

                        $scope.totalTyTrueCost = $scope.outputScreenData.sumOfAllTyMaterial + $scope.outputScreenData.sumOfAllTyLabor + $scope.outputScreenData.sumOfAllTyIcr +
                            $scope.outputScreenData.sumOfAllTyEcr + $scope.outputScreenData.sumOfAllTyOther + $scope.outputScreenData.sumOfAllTyOther +
                            $scope.outputScreenData.sumOfAllTyLLP + $scope.outputScreenData.sumOfAllTyTransportation + $scope.outputScreenData.sumOfAllTyTestCell +
                            $scope.outputScreenData.sumOfAllTyCD + $scope.outputScreenData.sumOfAllTyMinorRate + $scope.outputScreenData.sumOfAllTyFlightLineLRU +
                            $scope.outputScreenData.sumOfAllTyEngineLeasing + $scope.outputScreenData.sumOfAllTyOnWingSupport + $scope.outputScreenData.sumOfAllTyFod +
                            $scope.outputScreenData.sumOfAllTycappedSbAd + $scope.outputScreenData.sumOfAllTymutAgreedSbAd + $scope.outputScreenData.sumOfAllTyUncappedSbAd +
                            $scope.outputScreenData.sumOfAllTyMiscCostSv + $scope.outputScreenData.sumOfAllTymiscCostEfh + $scope.outputScreenData.sumOfAllTyserviceCreditAdder +
                            $scope.outputScreenData.sumOfAllTyaddlBillings;


                        $scope.totalGEBilling = $scope.totalTyTrueCost / (1 - 0.6902);
                        $scope.tyOm = $scope.totalGEBilling - $scope.totalTyTrueCost;
                        $scope.tslv = 0;
                        $scope.tyOmPerc = 69.02;
                        $scope.rsp = 123;
                        $scope.totalRsp = $scope.totalTyTrueCost + $scope.rsp;
                        $scope.totalMonthly = 89.57;
                        $scope.totalTyBilling = 1960;

                        $rootScope.scrquoteID = $scope.outputScreenData.engineServiceDetailsResponseObject.c_quoteID;
                        $rootScope.screngineID = $scope.outputScreenData.engineServiceDetailsResponseObject.c_EngineModelSelected
                        console.log("QuoteID" + $rootScope.quoteID);
                        $rootScope.scrtotalGEBilling = $scope.totalGEBilling;
                        $rootScope.scrtotalTyTrueCost = $scope.totalTyTrueCost;
                        $rootScope.scrtyOm = $scope.tyOm;
                        $rootScope.tytslv = $scope.tslv;
                        $rootScope.scrtyOmPerc = $scope.tyOmPerc;
                        $rootScope.scrRsp = $scope.rsp;
                        $rootScope.scrTotalRsp = $scope.totalRsp;
                        $rootScope.scrTotalMonthly = $scope.totalMonthly;
                        $rootScope.scrtotalTyBilling = $scope.totalTyBilling;

                        // $('#KEFHPerYear').highcharts({
                        var chart = new Highcharts.Chart({
                            chart: {
                                type: 'line',
                                renderTo: 'KEFHPerYear',
                                borderWidth: 1,
                                borderColor: '#cccccc',
                                height: 250
                            },
                            title: {
                                text: null,
                            },
                            annotationsOptions: {
                                enabledButtons: false
                            },
                            subtitle: {
                                text: null,
                            },
                            credits: {
                                enabled: false
                            },
                            xAxis: {
                                categories: ['2015', '2016', '2017', '2018', '2019', '2020',
                                    '2021', '2022', '2023', '2024', '2025', '', '', '', '', '', '', '', '', ''
                                ],
                            },
                            yAxis: [{ //--- Primary yAxis
                                title: {
                                    text: 'KEFH Per Year',
                                },
                                min: 0,
                                max: 160,
                                tickInterval: 20,
                            }, { //--- Secondary yAxis
                                title: {
                                    text: 'SVs Per Year',
                                    rotation: -90,
                                },
                                gridLineWidth: 0,
                                min: 0,
                                max: 12,
                                tickInterval: 2,
                                opposite: true,
                            }],
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'top',
                                borderWidth: 0
                            },
                            series: [{
                                name: 'Monthly KEFH',
                                data: [135.482992200654, 141.084015156648, 151.050353018176, 84.8555649692341, 93.087915413318,
                                    75.03206435475, 124.602243408378, 62.302504607734, 58.9465267930193, 140.892265702797, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0
                                ],
                                color: '#f15c80',
                            }, {
                                name: 'TSLSV KEFH',
                                data: [128.800221734989, 128.132846939391, 123.711773040112, 92.9808489875666, 85.5461745215586, 72.0931131384502, 55.22516836273,
                                    47.8239123254479, 47.8673179219318, 47.8202899660293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                                ],
                                color: '#90ed7d',
                            }, {
                                name: 'NUMSV',
                                data: [8, 8.63, 9.76, 5.645, 6.175, 4.265, 7.3, 3.36, 3.305, 8.4],
                                color: '#7cb5ec',
                            }]
                        });


                        //$('#deferredBalance').highcharts({
                        var chart1 = new Highcharts.Chart({
                            chart: {
                                type: 'line',
                                renderTo: 'deferredBalance',
                                borderWidth: 1,
                                borderColor: '#cccccc',
                                height: 250
                            },
                            title: {
                                text: null,
                            },
                            annotationsOptions: {
                                enabledButtons: false
                            },
                            subtitle: {
                                text: null,
                            },
                            credits: {
                                enabled: false
                            },
                            xAxis: {
                                categories: ['2015', '2016', '2017', '2018', '2019', '2020',
                                    '2021', '2022', '2023', '2024', '2025', '', '', '', '', '', '', '', '', ''
                                ],
                            },
                            yAxis: [{ //--- Primary yAxis
                                title: {
                                    text: 'Def. Balance($k)',
                                },
                                min: -6000,
                                max: 2000,
                                tickInterval: 1000,
                            }, { //--- Secondary yAxis
                                title: {
                                    text: '$/EFH',
                                    rotation: -90,
                                },
                                gridLineWidth: 0,
                                min: 0,
                                max: 100,
                                tickInterval: 20,
                                opposite: true,
                            }],
                            legend: {
                                align: 'center',
                                verticalAlign: 'top',
                            },
                            series: [{
                                name: 'Deferred Balance($K)',
                                data: [-1762.01709687285, -809.902926525093, 706.507611849643, -1054.50388620357, -1749.65681184656, -4507.22966675276, -2336.65572697366, -4271.8992047005, -5313.37136214023, 1.63709046319127E-11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                color: '#7cb5ec',
                            }, {
                                name: 'Monthly MCPH Rate',
                                data: [
                                    86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                                ],
                                yAxis: 1,
                                color: '#f15c80',
                            }, {
                                name: 'TSLSV MCPH Rate',
                                data: [76.3360804280959, 76.9412645734414, 79.7251116420303, 81.3227977857423, 85.1717689501395, 83.743534367124, 86.301446021451, 87.8265100677214, 90.2230392832894, 91.2881633790973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                color: '#90ed7d',
                            }]
                        });
                        $scope.displayBody = true;
                        loadingService.stopSpinner(_placeholder);
                    },
                    function(errorPayload) {
                        //$log.error('failure loading movie', errorPayload);
                        console.log('failure loading movie', errorPayload);
                        $scope.displayBody = false;
                        loadingService.stopSpinner(_placeholder);
                    });



                //$scope.outputScreenData = engineServiceInfoService.getoutputScreenData($rootScope.OutputScreenRequestData)

                //$scope.outputScreenData = $rootScope.OutputScreenData;

                /*
                $scope.baseOverhaulSum=$scope.outputScreenData.sumOfAllTyMaterial+$scope.outputScreenData.sumOfAllTyLabor+$scope.outputScreenData.sumOfAllTyIcr+
                    $scope.outputScreenData.sumOfAllTyEcr+$scope.outputScreenData.sumOfAllTyOther;

                $scope.totalTyTrueCost=$scope.outputScreenData.sumOfAllTyMaterial+$scope.outputScreenData.sumOfAllTyLabor+$scope.outputScreenData.sumOfAllTyIcr+
                    $scope.outputScreenData.sumOfAllTyEcr+$scope.outputScreenData.sumOfAllTyOther+$scope.outputScreenData.sumOfAllTyOther+
                    $scope.outputScreenData.sumOfAllTyLLP+$scope.outputScreenData.sumOfAllTyTransportation+$scope.outputScreenData.sumOfAllTyTestCell+
                    $scope.outputScreenData.sumOfAllTyCD+$scope.outputScreenData.sumOfAllTyMinorRate+$scope.outputScreenData.sumOfAllTyFlightLineLRU+
                    $scope.outputScreenData.sumOfAllTyEngineLeasing+$scope.outputScreenData.sumOfAllTyOnWingSupport+$scope.outputScreenData.sumOfAllTyFod+
                    $scope.outputScreenData.sumOfAllTycappedSbAd+$scope.outputScreenData.sumOfAllTymutAgreedSbAd+$scope.outputScreenData.sumOfAllTyUncappedSbAd+
                    $scope.outputScreenData.sumOfAllTyMiscCostSv+$scope.outputScreenData.sumOfAllTymiscCostEfh+$scope.outputScreenData.sumOfAllTyserviceCreditAdder+
                    $scope.outputScreenData.sumOfAllTyaddlBillings;


                $scope.totalGEBilling =  $scope.totalTyTrueCost/(1 -0.6902);
                $scope.tyOm = $scope.totalGEBilling - $scope.totalTyTrueCost;
                $scope.tslv = 0;
                $scope.tyOmPerc = 69.02;
                $scope.rsp=123;
                $scope.totalRsp =  $scope.totalTyTrueCost+$scope.rsp;
                $scope.totalMonthly=89.57;
                $scope.totalTyBilling=1960;

                $rootScope.scrquoteID=$scope.outputScreenData.engineServiceDetailsResponseObject.c_quoteID;
                $rootScope.screngineID=$scope.outputScreenData.engineServiceDetailsResponseObject.c_EngineModelSelected
                console.log("QuoteID"+ $rootScope.quoteID);
                $rootScope.scrtotalGEBilling = $scope.totalGEBilling;
                $rootScope.scrtotalTyTrueCost = $scope.totalTyTrueCost;
                $rootScope.scrtyOm = $scope.tyOm;
                $rootScope.tytslv = $scope.tslv;
                $rootScope.scrtyOmPerc = $scope.tyOmPerc;
                $rootScope.scrRsp = $scope.rsp;
                $rootScope.scrTotalRsp = $scope.totalRsp;
                $rootScope.scrTotalMonthly = $scope.totalMonthly;
                $rootScope.scrtotalTyBilling= $scope.totalTyBilling;

                // $('#KEFHPerYear').highcharts({
                var chart = new Highcharts.Chart({
                    chart: {
                        type: 'line',
                        renderTo: 'KEFHPerYear',
                        borderWidth: 1,
                        borderColor: '#cccccc',
                        height:250
                    },
                    title: {
                        text: null,
                    },
                    subtitle: {
                        text: null,
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['2015', '2016', '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024', '2025', '', '', '', '', '', '', '', '', ''
                        ],
                    },
                    yAxis: [{ //--- Primary yAxis
                        title: {
                            text: 'KEFH Per Year',
                        },
                        min: 0,
                        max: 160,
                        tickInterval: 20,
                    }, { //--- Secondary yAxis
                        title: {
                            text: 'SVs Per Year',
                            rotation: -90,
                        },
                        gridLineWidth: 0,
                        min: 0,
                        max: 12,
                        tickInterval: 2,
                        opposite: true,
                    }],
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'top',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Monthly KEFH',
                        data: [135.482992200654, 141.084015156648, 151.050353018176, 84.8555649692341, 93.087915413318,
                            75.03206435475, 124.602243408378, 62.302504607734, 58.9465267930193, 140.892265702797, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0
                        ],
                        color: '#f15c80',
                    }, {
                        name: 'TSLSV KEFH',
                        data: [128.800221734989, 128.132846939391, 123.711773040112, 92.9808489875666, 85.5461745215586, 72.0931131384502, 55.22516836273,
                            47.8239123254479, 47.8673179219318, 47.8202899660293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                        ],
                        color: '#90ed7d',
                    }, {
                        name: 'NUMSV',
                        data: [8, 8.63, 9.76, 5.645, 6.175, 4.265, 7.3, 3.36, 3.305, 8.4],
                        color: '#7cb5ec',
                    }]
                });


                //$('#deferredBalance').highcharts({
                var chart1 = new Highcharts.Chart({
                    chart: {
                        type: 'line',
                        renderTo: 'deferredBalance',
                        borderWidth: 1,
                        borderColor: '#cccccc',
                        height:250
                    },
                    title: {
                        text: null,
                    },
                    subtitle: {
                        text: null,
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['2015', '2016', '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024', '2025', '', '', '', '', '', '', '', '', ''
                        ],
                    },
                    yAxis: [{ //--- Primary yAxis
                        title: {
                            text: 'Def. Balance($k)',
                        },
                        min: -6000,
                        max: 2000,
                        tickInterval: 1000,
                    }, { //--- Secondary yAxis
                        title: {
                            text: '$/EFH',
                            rotation: -90,
                        },
                        gridLineWidth: 0,
                        min: 0,
                        max: 100,
                        tickInterval: 20,
                        opposite: true,
                    }],
                    legend: {
                        align: 'center',
                        verticalAlign: 'top',
                    },
                    series: [{
                        name: 'Deferred Balance($K)',
                        data: [-1762.01709687285, -809.902926525093, 706.507611849643, -1054.50388620357, -1749.65681184656, -4507.22966675276, -2336.65572697366, -4271.8992047005, -5313.37136214023, 1.63709046319127E-11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        color: '#7cb5ec',
                    }, {
                        name: 'Monthly MCPH Rate',
                        data: [
                            86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 86.2798174648322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                        ],
                        yAxis: 1,
                        color: '#f15c80',
                    }, {
                        name: 'TSLSV MCPH Rate',
                        data: [76.3360804280959, 76.9412645734414, 79.7251116420303, 81.3227977857423, 85.1717689501395, 83.743534367124, 86.301446021451, 87.8265100677214, 90.2230392832894, 91.2881633790973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        color: '#90ed7d',
                    }]
                }); */



            }


            $scope.loadOutPutScreenData();

            /* $timeout(function() {

                 //loadingService.startSpinner(_placeholder);
                 $scope.loadOutPutScreenData();
                 console.log("output controller called");
             }, 9000);*/

        }
    ]);


});
